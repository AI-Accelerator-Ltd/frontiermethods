import { redirect } from "next/navigation";
export const metadata = {
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};
export default function RisksRedirect() {
  redirect("/aria/risks");
}
