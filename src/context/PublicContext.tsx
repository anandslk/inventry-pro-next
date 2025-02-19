"use client";

import { Spinner } from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/store";
import { ReactNode } from "react";

export function PublicContext({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userData = useAppSelector((state) => state.storeData.user);

  if (user.isPending) return <Spinner />;
  if (userData) return <Spinner />;

  return children;
}
