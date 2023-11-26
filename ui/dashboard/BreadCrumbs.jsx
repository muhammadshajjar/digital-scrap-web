import Link from "next/link";
import { Lusitana } from "next/font/google";

import { clsx } from "clsx";

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol
        className={clsx(lusitana.className, "font-medium  flex  md:text-2xl")}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? "text-gray-900" : "text-gray-600"
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block ">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
