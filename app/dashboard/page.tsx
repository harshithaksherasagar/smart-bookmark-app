'use client'

import BookmarkForm from '@/components/BookmarkForm'
import BookmarkList from '@/components/BookmarkList'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Navbar />
      <BookmarkForm />
      <BookmarkList />
    </div>
  )
}
