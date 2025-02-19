"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/store";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />

        {children}
      </QueryClientProvider>
    </Provider>
  );
};
