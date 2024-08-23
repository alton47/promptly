'use client';

import { SessionProvider } from "next-auth/react"

const Provider = ({ children, session }) => {
  return (
    <sessionProvider session={session}>
      {children}
    </sessionProvider>
  )
}

export default Provider
