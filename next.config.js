/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) Emit a minimal standalone server bundle
  output: 'standalone',

  // 2) Your existing image domains
  images: {
    domains: ['images.unsplash.com'],
  },

  // 3) Compose experimental settings
  experimental: (() => {
    // Always trace files from your project root
    const exp = {
      outputFileTracingRoot: __dirname,
    };

    // If you’re using tempo, add its SWC plugin
    if (process.env.NEXT_PUBLIC_TEMPO) {
      exp.swcPlugins = [
        // adjust the version/path as you already have it
        [require.resolve('tempo-devtools/swc/0.90'), {}],
      ];
    }

    return exp;
  })(),
};

module.exports = nextConfig;
