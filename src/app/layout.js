import { TaskProvider } from '../context/TaskContext'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Manager',
  description: 'Manage your tasks efficiently',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  )
}