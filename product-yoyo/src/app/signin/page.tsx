"use client";
import { SignIn } from "@/components/signin";
import UserLayout from "@/layouts/userLayout";

export default function SignInPage() {
  return (
    <UserLayout>
      <div className="flex flex-row justify-center h-screen items-center">
        <SignIn />
      </div>
    </UserLayout>
  );
}
