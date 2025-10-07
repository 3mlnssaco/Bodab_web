import { ReactNode } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  useSimpleNav?: boolean;
}

export function PageLayout({ children, useSimpleNav = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-16">
        <div className="w-full">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}