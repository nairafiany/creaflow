import { LoginForm } from "@/components/login-form";
import { ReturnButton } from "@/components/return-button";
import { SignInOauthButton } from "@/components/sign-in-oauth-button";
import Link from "next/link";
import { Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    // 1. Full-screen gradient background with centered content
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-[var(--color-brand-navy)] via-[var(--color-brand-purple)] to-[var(--color-brand-burgundy)]">
      {/* 2. A single, focused Card to contain the entire login flow */}
      <Card className="w-full max-w-md shadow-2xl bg-white/95 backdrop-blur-sm border-0">
        <CardHeader className="text-center space-y-4">
          {/* 3. Brand Logo for consistency */}
          <Link href="/" className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-burgundy)] rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Creaflow</span>
          </Link>
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <LoginForm />

          {/* 4. Modern divider replacing the <hr> */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* OAuth buttons are now part of the main card flow */}
          <div className="flex flex-col gap-4">
            <SignInOauthButton provider="google" />
            <SignInOauthButton provider="github" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center text-sm">
          <p className="text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-[var(--color-brand-purple)] hover:underline"
            >
              Register here
            </Link>
          </p>
          <div className="mt-4">
            <ReturnButton href="/" label="Back to Home" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
