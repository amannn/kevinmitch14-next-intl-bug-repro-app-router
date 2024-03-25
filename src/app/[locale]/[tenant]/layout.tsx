import React from 'react';

export default function Layout({
  params,
  children
}: {
  children: React.ReactNode;
  params: {locale: string; tenant: string};
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
