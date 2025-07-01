"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export const GetStartedButton = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <Button size="lg" className="opacity-50" asChild>
        <span>Get Started</span>
      </Button>
    );
  }

  const href = session ? "/profile" : "/auth/login";

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        size="lg"
        className="bg-[var(--color-brand-orange)] text-white hover:bg-[var(--color-brand-burgundy)]"
        asChild
      >
        <Link href={href}>Get Started</Link>
      </Button>

      {session && (
        <p className="flex items-center gap-2 text-white">
          <span
            data-role={session.user.role}
            className="size-4 rounded-full animate-pulse data-[role=CLIENT]:bg-[var(--color-brand-burgundy)] data-[role=ADMIN]:bg-[var(--color-brand-purple)]"
          />
          Welcome back, {session.user.name}! 👋
        </p>
      )}
    </div>
  );
};
