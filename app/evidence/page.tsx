import { redirect } from "next/navigation";
export const metadata = {
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};
export default function EvidenceRedirect() {
  redirect("/aria/evidence");
}
