'use client'

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const PromptCard = ({ post, handleTagCLick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      Card
    </div>
  )
}

export default PromptCard
