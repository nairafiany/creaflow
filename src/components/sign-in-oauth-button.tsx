"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

// --- IMPORTANT NOTE ---
// You will need to provide your own icons for Google and GitHub.
// A great library for this is `react-icons`. For example:
// `npm install react-icons`
// Then you can import them like this:
// import { FaGithub, FaGoogle } from "react-icons/fa";
// For this example, I'll use placeholder components.
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    {" "}
    {/* Placeholder SVG */}
    <path
      fill="currentColor"
      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.54,18.33 21.54,12.81C21.54,11.76 21.45,11.44 21.35,11.1Z"
    />
  </svg>
);
const GithubIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    {" "}
    {/* Placeholder SVG */}
    <path
      fill="currentColor"
      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.83,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
);

interface SignInOauthButtonProps {
  provider: "google" | "github";
  signUp?: boolean;
}

export const SignInOauthButton = ({
  provider,
  signUp,
}: SignInOauthButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  async function handleClick() {
    setIsPending(true);
    try {
      await signIn.social({
        provider,
        callbackURL: "/profile",
        errorCallbackURL: "/auth/login/error",
      });
    } catch (error) {
      console.error("OAuth sign-in failed:", error);
      // You should probably show a toast message here
    } finally {
      // In a real scenario, the user will be redirected.
      // This is here as a fallback in case of immediate errors.
      setIsPending(false);
    }
  }

  const action = signUp ? "Up" : "In";
  const providerName = provider === "google" ? "Google" : "GitHub";

  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Redirecting...
        </>
      ) : (
        <>
          {provider === "google" ? <GoogleIcon /> : <GithubIcon />}
          <span className="ml-2">
            Sign {action} with {providerName}
          </span>
        </>
      )}
    </Button>
  );
};
