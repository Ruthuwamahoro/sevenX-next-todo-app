const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.cdn-files-a.com',
          pathname: '**',
        },
      ],
    },
  };  

export default nextConfig;
