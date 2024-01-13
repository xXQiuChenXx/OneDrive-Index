"use client";
import { Menu, Transition } from "@headlessui/react";
import { IconLanguage, IconChevronDown } from "@tabler/icons-react";
import { Fragment } from "react";

const locale = (locale: string): string => {
  switch (locale) {
    case "zh-CN":
      return "简体中文";
    case "zh-TW":
      return "🌐 繁體中文";
    default:
      return "English";
  }
};

const LangSwitcher = () => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center space-x-1.5 hover:opacity-80 dark:text-white">
          <IconLanguage height={20} width={20} />
          <p>Language</p>
          <IconChevronDown height={16} width={20} />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute top-0 right-0 z-20 mt-8 w-28 divide-y divide-gray-900 overflow-auto rounded border border-gray-900/10 bg-white py-1 shadow-lg focus:outline-none dark:border-gray-500/30 dark:bg-gray-900 dark:text-white">
            <Menu.Item key="locale">
              <div className="m-1 cursor-pointer rounded px-2 py-1 text-left text-sm font-medium hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-600/10 dark:hover:text-blue-400">
                {locale("zh-CN")}
              </div>
            </Menu.Item>

            {/* {locales!.map(locale => (
              <Menu.Item key={locale}>
                <CustomLink
                  key={locale}
                  href={{ pathname, query }}
                  as={asPath}
                  locale={locale}
                  onClick={() => setCookie('NEXT_LOCALE', locale, { path: '/' })}
                >
                  <div className="m-1 cursor-pointer rounded px-2 py-1 text-left text-sm font-medium hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-600/10 dark:hover:text-blue-400">
                    {localeText(locale)}
                  </div>
                </CustomLink>
              </Menu.Item>
            ))} */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LangSwitcher;
