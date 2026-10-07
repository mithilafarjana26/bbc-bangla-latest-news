# 📰 BBC Bangla News

A modern and responsive Bangla news website built with **Next.js, TypeScript, Tailwind CSS, HeroUI, and Better Auth**.

This project uses the BBC Bangla News API to display latest news, categories, most-read news, detailed articles, and provides user authentication with profile management.

## 🚀 Features

- 🏠 Responsive Home Page
- 📰 Latest News Marquee
- 📂 Dynamic News Categories
- 🔥 Most Read News
- 📄 Dynamic News Details Page
- 🖼️ BBC Remote Images using Next.js Image
- 📱 Fully Responsive Design
- 🔐 Email & Password Authentication
- 🔵 Google Authentication
- 👤 User Profile Update
- 🚪 Sign In / Sign Up / Sign Out
- 🗄️ MongoDB Database
- 🎨 Tailwind CSS & HeroUI
- ⚡ Next.js App Router
- 🧩 Reusable Components

## 🛠️ Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- HeroUI
- DaisyUI
- Better Auth
- MongoDB
- React Marquee Text

## 🔐 Private Profile Route

The Profile page is protected and can only be accessed by authenticated users.

If a user is not logged in, they cannot access the Profile page. After successful authentication, the user can access `/profile` and update their profile information.

### Profile Access Flow

```text
User
 ↓
Is the user authenticated?
 ↓
 ├── No → Access denied / Redirect to Sign In
 │
 └── Yes → Profile Page
              ↓
         Update Profile

## 🌐 API

This project uses the following News API:

`https://news-api-v2.vercel.app`

Main endpoints:

- `/api/news/sections`
- `/api/news?limit=10`
- `/api/news/most-read`
- `/api/categories`
- `/api/article/[id]`

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── categories/
│   │       └── route.ts
│   ├── category/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── news/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── sign-in/
│   │   └── page.tsx
│   ├── sign-up/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Navlinks.tsx
│   ├── Marquee.tsx
│   ├── MainNews.tsx
│   ├── NewsCard.tsx
│   ├── MostRead.tsx
│   └── Footer.tsx
│
└── lib/
    ├── auth.ts
    └── auth-client.ts

   
