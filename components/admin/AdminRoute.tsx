"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  }
}

export default function AdminRoute({ link }: AdminRouteProps) {

  const pathName = usePathname()
  const markedPath = pathName === link.url

  return (
    <Link
      href={link.url}
      target={link.blank ? "_blank" : "" }
      className={`${markedPath ? "bg-amber-500" : ""} flex items-center gap-4 w-full border-t border-gray-100 last-of-type:border-b p-3 font-bold text-lg`}>
        {link.text}
    </Link>
  )
}
