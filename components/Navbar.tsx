'use client'

import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="flex justify-between mb-6">
      <h1 className="text-xl font-bold">Smart Bookmark</h1>
      <button onClick={logout} className="text-red-500">
        Logout
      </button>
    </div>
  )
}
