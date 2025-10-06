"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/main-page");
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-blue-500">
      <div className="mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl">
      </div>
    </main>
  );
}
