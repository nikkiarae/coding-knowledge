import type { NextConfig } from "next";
import { NEXT_PUBLIC_API_URL } from "@/lib/constants/config";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: NEXT_PUBLIC_API_URL
  },
};

export default nextConfig;
