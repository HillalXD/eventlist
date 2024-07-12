export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover">
      {children}
    </div>
  );
}
