module.exports = {
  reactStrictMode: true,
  env: {
    ROOT_API_BASE_URL: "https://api.bitke.io/api/v1"
  },

  eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },

}
