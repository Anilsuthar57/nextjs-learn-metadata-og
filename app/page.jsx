import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home | My Website",
  description: "This is the home page of my Next.js practice website.",
  openGraph: {
    title: "Home | My Website",
    description: "This is the home page of my Next.js practice website.",
    url: "http://localhost:3000",
    images: [{ url: "/home-og.png" }],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link href="/image">View Images</Link> <br />
        <Link href="/fonts">View Fonts</Link> <br />
        <Link href="/service">View Service Page</Link> <br />
        <Link href="/about">View About Page</Link> <br />
        <Link href="/contact">View Contact Page</Link>
      </div>
    </>
  );
}
