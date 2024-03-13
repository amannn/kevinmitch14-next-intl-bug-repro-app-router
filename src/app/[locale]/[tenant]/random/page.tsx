import { notFound } from "next/navigation";

export default function RandomPage() {
  if (true) notFound();
  return <div>Random Page</div>;
}
