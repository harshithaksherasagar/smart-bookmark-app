# Smart Bookmark App

A full-stack bookmark management application built using:

- Next.js (App Router)
- Supabase (Auth + Database)
- Google OAuth
- Vercel (Deployment)

---

## 🚀 Features

- Google Login using Supabase Auth
- Add bookmarks (Title + URL)
- View bookmarks
- Secure database with Row Level Security (RLS)
- Deployed on Vercel

---

## 🛠 Tech Stack

- Next.js 16
- Supabase
- PostgreSQL
- Google OAuth
- Vercel

---

## ⚠️ Problems I Faced & How I Solved Them

### 1️⃣ Google Login Redirect Loop
**Problem:**  
After clicking login, it was redirecting back to login page.

**Solution:**  
Added correct Redirect URLs in:
- Google Cloud Console
- Supabase Auth Settings
- Vercel Production URL

---

### 2️⃣ 401 Unauthorized Error
**Problem:**  
Bookmarks were not being added due to 401 error.

**Solution:**  
Configured:
- Supabase API keys correctly
- Enabled Row Level Security (RLS)
- Added proper insert/select policies

---

### 3️⃣ Environment Variables Not Working on Vercel
**Problem:**  
App worked locally but failed after deployment.

**Solution:**  
Added the following environment variables in Vercel:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

Then redeployed.

---

### 4️⃣ Data Not Persisting After Refresh
**Problem:**  
Bookmarks disappeared after reload.

**Solution:**  
Fetched bookmarks from Supabase database on page load using useEffect.

---

## 🌐 Live Demo

https://github.com/harshithaksherasagar/smart-bookmark-app

---

## 📂 GitHub Repository

smart-bookmark-app-plum-seven.vercel.app
