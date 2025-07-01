"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signInEmailAction } from "@/actions/sign-in-email.action";
import Link from "next/link";
import { Loader2 } from "lucide-react"; // 1. Import the loader icon

export const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsPending(true);
    const formData = new FormData(evt.currentTarget);
    const { error } = await signInEmailAction(formData);

    if (error) {
      toast.error(error);
      setIsPending(false);
    } else {
      toast.success("Login successful. Good to have you back.");
      router.push("/profile");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <Link
            tabIndex={-1}
            href="/auth/forgot-password"
            // 2. Styled the link to use a brand color on hover
            className="text-sm text-muted-foreground hover:text-[var(--color-brand-purple)] hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          type="password"
          id="password"
          name="password"
          required
          disabled={isPending}
        />
      </div>

      {/* 3. Branded the button and added a loading indicator */}
      <Button
        type="submit"
        className="w-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-burgundy)]"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};
