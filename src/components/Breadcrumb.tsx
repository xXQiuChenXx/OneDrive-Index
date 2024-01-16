import type { ParsedUrlQuery } from "querystring";
import { IconChevronRight, IconHome } from "@tabler/icons-react";
import Link from "next/link";

const HomeCrumb = () => {
  return (
    <Link href="/home" className="flex items-center">
      <IconHome width={16} height={16} />
      <span className="ml-2 font-medium">Home</span>
    </Link>
  );
};

const Breadcrumb = ({ pathname }: { pathname: Array<string> }) => {

  if (pathname?.length) {
    return (
      <ol className="no-scrollbar inline-flex flex-row-reverse items-center gap-1 overflow-hidden text-sm text-gray-600 dark:text-gray-300 md:gap-3">
        {pathname
          .slice(0)
          .reverse()
          .map((p: string, i: number) => (
            <li key={i} className="flex flex-shrink-0 items-center">
              <IconChevronRight width={16} height={16} />
              <Link
                href={`/home/${pathname
                  .slice(0, pathname.length - i)
                  .map((p) => encodeURIComponent(p))
                  .join("/")}`}
                passHref
                className={`ml-1 transition-all duration-75 hover:opacity-70 md:ml-3 ${
                  i == 0 && "pointer-events-none opacity-80"
                }`}
              >
                {p}
              </Link>
            </li>
          ))}
        <li className="flex-shrink-0 transition-all duration-75 hover:opacity-80">
          <HomeCrumb />
        </li>
      </ol>
    );
  }

  return (
    <div className="text-sm text-gray-600 transition-all duration-75 hover:opacity-80 dark:text-gray-300">
      <HomeCrumb />
    </div>
  );
};

export default Breadcrumb;
