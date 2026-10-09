
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
   baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== "undefined"
      ? window.location.origin
      : "https://bbc-bangla-latest-news.vercel.app"),
});

export const {
  signIn,
  signUp,
  signOut,
  updateUser,
  useSession,
} = authClient;
