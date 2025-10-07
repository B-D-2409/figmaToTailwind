"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Home Page Component
 *
 * This page automatically redirects the user to the main page ("/main-page") 
 * using Next.js App Router's `useRouter().replace` method.
 *
 * @component
 * @example
 * // When visiting "/", the user will be redirected:
 * <Home />
 *
 * @returns {JSX.Element} A minimal page showing nothing before redirect
 */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Replace the current route with /main-page
    router.replace("/main-page");
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-blue-500">
      <div className="mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl">
        {/* Optional: You can add a loading spinner or message here */}
      </div>
    </main>
  );
}
