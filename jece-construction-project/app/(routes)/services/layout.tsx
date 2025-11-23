import "@/app/globals.css";

function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Services</h1>
      {children}
    </div>
  );
}

export default ServicesLayout;
