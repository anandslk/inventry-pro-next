import { PublicContext } from "@/context/PublicContext";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicContext>{children}</PublicContext>;
}
