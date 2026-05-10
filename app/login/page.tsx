// app/login/page.tsx
import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In | Yandu",
  description: "Sign in to your Yandu account to manage your projects, billing, and messages.",
}

export default function LoginPage() {
  return <LoginForm />;
}