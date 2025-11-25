export const metadata = {
  title: "Contact | My Website",
  description: "This is the contact page of my website.",
  openGraph: {
    title: "Contact Page — My Website",
    description: "This is the contact page of my website.",
    url: "https://learnog.netlify.app/contact",
    images: [
      {
        url: "https://learnog.netlify.app/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact page preview image",
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>You can contact us anytime.</p>
    </div>
  );
}
