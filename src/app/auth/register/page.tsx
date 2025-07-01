import { RegisterForm } from "@/components/register-form";
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
    // 1. Consistent full-screen gradient background
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-[var(--color-brand-navy)] via-[var(--color-brand-purple)] to-[var(--color-brand-burgundy)]">
      {/* 2. Using the same focused Card layout */}
      <Card className="w-full max-w-md shadow-2xl bg-white/95 backdrop-blur-sm border-0">
        <CardHeader className="text-center space-y-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-burgundy)] rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Creaflow</span>
          </Link>

          {/* 3. Adapted text for the registration context */}
          <CardTitle className="text-3xl font-bold">
            Create an Account
          </CardTitle>
          <CardDescription>
            Join Creaflow today to streamline your creative business.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <RegisterForm />

          {/* Modern divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <SignInOauthButton signUp provider="google" />
            {/* You could add a GitHub button here too if you want */}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-[var(--color-brand-purple)] hover:underline"
            >
              Login here
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
