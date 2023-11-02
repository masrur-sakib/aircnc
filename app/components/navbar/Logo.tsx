"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <p
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer text-green-400 text-2xl font-bold"
    >
      Aircnc
    </p>
  );
};

export default Logo;
