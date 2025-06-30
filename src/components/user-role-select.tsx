"use client";

import { useEffect, useState } from "react";
import { UserRole } from "@prisma/client";
import { admin } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface UserRoleSelectProps {
  userId: string;
  role: UserRole;
}

export const UserRoleSelect = ({ userId, role }: UserRoleSelectProps) => {
  const [isPending, setIsPending] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Ensures this component only renders after hydration
  useEffect(() => {
    setMounted(true);
    console.log("Component mounted");
    console.log("Available UserRole enums from @prisma/client:", UserRole);
    console.log("Initial user role prop:", role);
  }, []);

  if (!mounted) return null;

  async function handleChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const newRole = evt.target.value as UserRole;

    console.log("User selected new role:", newRole);

    const canChangeRole = await admin.hasPermission({
      permissions: { user: ["set-role"] },
    });

    console.log("Permission check result:", canChangeRole);

    if (canChangeRole.error) {
      toast.error("Forbidden");
      return;
    }

    console.log("Sending role update for user", userId, "to", newRole);

    await admin.setRole({
      userId,
      role: newRole,
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
          console.log("Request started");
        },
        onResponse: () => {
          setIsPending(false);
          console.log("Request finished");
        },
        onError: (ctx) => {
          console.error("Error setting role:", ctx.error);
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("User role updated");
          console.log("User role successfully updated");
          router.refresh();
        },
      },
    });
  }

  return (
    <select
      value={role}
      onChange={handleChange}
      disabled={role === "ADMIN" || isPending}
      className="px-3 py-2 text-sm border rounded disabled:cursor-not-allowed disabled:opacity-50"
    >
      <option value={UserRole.ADMIN}>ADMIN</option>
      <option value={UserRole.CLIENT}>CLIENT</option>
      <option value={UserRole.EDITOR}>EDITOR</option>
    </select>
  );
};
