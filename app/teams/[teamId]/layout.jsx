"use client";

import { usePathname } from "next/navigation";
import TeamPage from "./components/TeamPage";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <>
      {segments.length > 1 && segments[0] === "teams" && (
        <TeamPage teamId={segments[1]} children={children} />
      )}
    </>
  );
}
