"use client";

import { Spinner } from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function PublicContext({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userData = useAppSelector((state) => state.storeData.user);
  const router = useRouter();

  if (user.isPending) return <Spinner />;
  if (userData) router.push("/");

  return children;
}
