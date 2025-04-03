'use client'

export default function ClientLayout({ children }) {
  return (
    <div className="container mx-auto p-4">
      {children}
    </div>
  )
}