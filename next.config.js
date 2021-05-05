const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      'github.com',
      'unavatar.now.sh',
      'source.unsplash.com',
      'avatars.githubusercontent.com',
      'news.cgtn.com',
      '1.bp.blogspot.com',
      'i.ytimg.com',
      'i.pinimg.com',
    ],
  },
};
