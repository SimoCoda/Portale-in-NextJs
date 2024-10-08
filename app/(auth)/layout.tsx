import React from 'react'

export default function AuthLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <div className="min-h-screen flexx items-center justify-center w-full bg-primary bg-opacity-20">
      {children}
    </div>
  )
}

