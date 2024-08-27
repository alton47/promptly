'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault(); // Prevents page reloads
    setSubmitting(true);

    // Logging for debugging purposes
    console.log("Submitting post:", post);
    console.log("Session data:", session);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        console.log('Prompt created successfully');
        router.push('/');
      } else {
        console.error('Failed to create prompt. Response status:', response.status);
        const errorMessage = await response.text();
        console.error('Error message:', errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
