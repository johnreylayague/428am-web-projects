import "@/app/globals.css";

function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Gallery</h1>
      {children}
    </div>
  );
}

export default GalleryLayout;
