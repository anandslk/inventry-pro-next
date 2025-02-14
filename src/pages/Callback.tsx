"use client";

import { useEffect } from "react";
import { Spinner } from "@/components/Loader";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error during callback:", error.message);
      } else {
        console.warn("User authenticated:", data);
        router.push("/");
      }
    };

    handleAuthCallback();
  }, [router]);

  return <Spinner />;
};

export default AuthCallback;
