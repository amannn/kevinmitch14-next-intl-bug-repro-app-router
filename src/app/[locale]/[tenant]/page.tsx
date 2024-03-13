import React from "react";

export default function TenantPage({
  params,
}: {
  params: { tenant: string; locale: string };
}) {
  return (
    <div>
      <p>Tenant: {params.tenant}</p>
      <p>Locale: {params.locale}</p>
    </div>
  );
}
