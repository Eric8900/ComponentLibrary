"use client";

import { usePathname } from "next/navigation";
import { Routes } from "@/lib/pageroutes";
import SubLink from "@/components/navigation/sublink";

export default function PageMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/components")) return null;

  return (
    <div className="flex flex-col mt-5 pb-6 font-light">
      {Routes.map((item, index) => {
        if ('spacer' in item) {
          return (
            <div key={`spacer-${index}`} className="my-2 mr-3">
              <hr className="border-t border-gray-300" />
            </div>
          );
        }
        return (
          <div key={item.title + index} className="mb-2">
            {item.heading && <h2 className="text-sm font-bold mb-2">{item.heading}</h2>}
            <SubLink
              {...{
                ...item,
                href: `/components${item.href}`,
                level: 0,
                isSheet,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
