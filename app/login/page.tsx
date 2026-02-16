'use client'

import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/dashboard',
      },
    })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <button
        onClick={handleLogin}
        className="bg-white text-black px-6 py-3 rounded-lg"
      >
        Login with Google
      </button>
    </div>
  )
}
