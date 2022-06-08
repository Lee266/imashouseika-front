/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'hello'
  },
};

// experimental: { esmExternals: true },

module.exports = nextConfig
// module.exports = settingEnv
// module.exports = settingNode
// export default nextConfig
// export default settingEnv
// export default settingNode
