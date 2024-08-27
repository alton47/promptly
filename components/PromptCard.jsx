'use client'

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const PromptCard = ({ post, handleTagCLick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <Image
          scr={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
                {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500"></p>
          </div>
      </div>
    </div>
  )
}

export default PromptCard
