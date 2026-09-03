const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
        instrumentationHook: true,
    },
    transpilePackages: ["geist"],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yuqiweb.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
            },
        ],
    },
    //   async redirects() {
    //     return [
    //       {
    //         source: '/notes/:slug*',
    //         destination: '/blogs/:slug*',
    //         permanent: true,
    //       },
    //     ];
    //   },
};

export default nextConfig;
