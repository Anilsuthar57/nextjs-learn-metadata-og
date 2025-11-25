export const metadata = {
  title: "Contact | My Website",
  description: "This is the contact page of my website.",
  openGraph: {
    title: "Contact Page — My Website",
    description: "This is the contact page of my website.",
   url: "https://learnog.netlify.app/contact",
    images: [{ url: "/contact-og.png" }],
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
