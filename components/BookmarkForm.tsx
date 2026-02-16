'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function BookmarkForm() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data: userData } = await supabase.auth.getUser()

    await supabase.from('bookmarks').insert({
      title,
      url,
      user_id: userData.user?.id,
    })

    setTitle('')
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Bookmark
      </button>
    </form>
  )
}
