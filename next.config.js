/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com","photos.google.com"]
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(bin|node)$/,
          use: {
            loader: 'node-loader',
          },
        });
    
        return config;
      },
}

module.exports = nextConfig
