// next.config.js
module.exports = {
  output: "export", // Tells Next.js to generate a static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js image optimization since you're using your own <Image />
  },
};
