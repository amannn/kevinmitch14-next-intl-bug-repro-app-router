export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string; tenant: string };
}) {
  console.log(params);
  return children;
}
