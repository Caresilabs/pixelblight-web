import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
  * Enable static exports.
  *
  * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  */
  output: "export",

  basePath: "/pixelblight-web",

  images: {
    unoptimized: true,
  },

};

export default nextConfig;
