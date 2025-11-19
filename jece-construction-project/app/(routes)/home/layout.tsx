import "@/app/globals.css";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Home</h1>
      {children}
    </div>
  );
}

export default HomeLayout;
