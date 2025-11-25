import React from "react";
// import globeImage from "../images/globe.svg";

export const metadata = {
  title: "Service | My Website",
  description: "This is service page description.",
  authors: [{ name: "anil" }, { name: "suthar techno.", url: "youtube.com" }],
  keywords: ["nextjs", "fullstack", "furniture"],
  icons: {
    icon: "/globe.svg",
  },
  openGraph: {
    title: "Service Page — My Website",
    description: "This is service page description",
    url: "https://learnog.netlify.app/service",
    images: [
      {
        url: "/service-og.png",
        width: 1200,
        height: 630,
        alt: "service page preview image",
      },
    ],
    type: "website",
  },
};

function service() {
  return <div>service page</div>;
}

export default service;
