/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
		domains: [
			"localhost",
			"cute-bull-buckle.cyclic.app",
			"res.cloudinary.com",
		],
	},
}

module.exports = nextConfig
