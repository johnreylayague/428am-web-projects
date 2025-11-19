import "@/app/globals.css";

function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>About Us</h1>
      {children}
    </div>
  );
}

export default AboutUsLayout;
