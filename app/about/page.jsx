export const metadata = {
  title: "About | My Website",
  description: "This is the about page of my website.",
  openGraph: {
    title: "About Page — My Website",
    description: "This is the about page of my website.",
    url: "https://learnog.netlify.app/about",
    images: [
      {
        url: "https://learnog.netlify.app/about-og.png",
        width: 1200,
        height: 630,
        alt: "about page preview image",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page.</p>
    </div>
  );
}
