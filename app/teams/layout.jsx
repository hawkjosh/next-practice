"use client";

import { usePathname } from "next/navigation";
import AllTeamsNavbar from "./components/AllTeamsNavbar";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="min-h-screen @container/main">
      {pathname === "/teams" && <AllTeamsNavbar />}
      {children}
    </div>
  );
}
