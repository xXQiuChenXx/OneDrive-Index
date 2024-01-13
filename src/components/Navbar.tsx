import Link from "next/link";
import { IconWhirl, IconSearch, IconBrandGithub } from "@tabler/icons-react";
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-900/10 bg-white bg-opacity-80 backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900">
      <div className="mx-auto flex w-full items-center justify-between space-x-4 px-4 py-2 container ">
        <Link
          href="/"
          passHref
          className="flex items-center space-x-2 py-2 hover:opacity-80 dark:text-white md:p-2"
        >
          <IconWhirl width={25} height={25} />
          <span className="hidden font-bold sm:block">Spacer Drive</span>
        </Link>

        <div className="flex flex-1 items-center space-x-4 text-gray-700 md:flex-initial">
          <button
            className="flex flex-1 items-center justify-between rounded-lg bg-gray-100 px-2.5 py-1.5 hover:opacity-80 dark:bg-gray-800 dark:text-white md:w-48"
            // onClick={openSearchBox}
          >
            <div className="flex items-center space-x-2">
              <IconSearch width={16} height={16} />
              {/* translate */}
              <span className="truncate text-sm font-medium">Search</span>
            </div>

            <div className="hidden items-center space-x-1 md:flex">
              <div className="rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                Ctrl
              </div>
              <div className="rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                K
              </div>
            </div>
          </button>

          <LangSwitcher />

          <a
            key="github"
            href="https://github.com/xXQiuChenXx/OneDrive-Index"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 dark:text-white "
          >
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
