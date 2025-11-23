import "@/app/globals.css";

function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Contact Us</h1>
      {children}
    </div>
  );
}

export default ContactUsLayout;
