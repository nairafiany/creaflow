"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signUpEmailAction } from "@/actions/sign-up-email.action";
import { Loader2 } from "lucide-react"; // 1. Import the loader icon

export const RegisterForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsPending(true); // Moved here to correctly start the pending state

    const formData = new FormData(evt.target as HTMLFormElement);
    const { error } = await signUpEmailAction(formData);

    if (error) {
      toast.error(error);
      setIsPending(false); // Stop pending on error
    } else {
      toast.success("Registration complete. Please log in.");
      router.push("/auth/login");
      // No need to set isPending to false here, as we are navigating away
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required disabled={isPending} />
      </div>

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
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          required
          disabled={isPending}
        />
      </div>

      {/* 2. Branded the button and added a loading indicator */}
      <Button
        type="submit"
        className="w-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-burgundy)]"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
};
