"use client";

import Navbar from "@/components/Navbar";
import { Spinner } from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/store";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userData = useAppSelector((state) => state.storeData.user);

  const router = useRouter();

  if (user.isPending) return <Spinner />;
  if (!userData) router.push("/login");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
