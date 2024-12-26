import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  type: 'OAuth2',
  user: process.env.MAIL_USERNAME,
  pass: process.env.MAIL_PASSWORD,
  clientId: process.env.OAUTH_CLIENTID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  refreshToken: process.env.OAUTH_REFRESH_TOKEN
};

export default nextConfig;
