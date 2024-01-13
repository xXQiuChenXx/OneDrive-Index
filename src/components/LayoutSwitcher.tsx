"use client";

import {
  IconList,
  IconLayoutGrid,
  IconCheck,
  IconChevronDown,
} from "@tabler/icons-react";

import { Fragment, ReactNode } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { useTranslation } from 'next-i18next'

import useLocalStorage from "../utils/useLocalStorage";

export const layouts: Array<{
  id: number;
  name: "Grid" | "List";
  icon: ReactNode;
}> = [
  {
    id: 1,
    name: "List",
    icon: <IconList className="mr-2" height={16} width={16} />,
  },
  {
    id: 2,
    name: "Grid",
    icon: <IconLayoutGrid className="mr-2" height={16} width={16} />,
  },
];

const LayoutSwitcher = () => {
  const [preferredLayout, setPreferredLayout] = useLocalStorage(
    "preferredLayout",
    layouts[0]
  );

  //   const { t } = useTranslation()

  return (
    <div className="relative w-24 flex-shrink-0 text-sm text-gray-600 dark:text-gray-300 md:w-28">
      <Listbox value={preferredLayout} onChange={setPreferredLayout}>
        <Listbox.Button className="relative w-full cursor-pointer rounded pl-4">
          <span className="pointer-events-none flex items-center">
            {preferredLayout.name === "List"
              ? layouts[0].icon
              : layouts[1].icon}
            <span>
              {
                // translate Grid || List
                preferredLayout.name
              }
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <IconChevronDown height={18} width={20} />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute right-0 z-20 mt-1 w-32 overflow-auto rounded border border-gray-900/10 bg-white py-1 shadow-lg focus:outline-none dark:border-gray-500/30 dark:bg-gray-800">
            {layouts.map((layout) => (
              <Listbox.Option
                key={layout.id}
                className={`${
                  layout.name === preferredLayout.name &&
                  "bg-blue-50 text-blue-700 dark:bg-blue-600/10 dark:text-blue-400"
                } relative flex cursor-pointer select-none items-center py-1.5 pl-3 text-gray-600 hover:opacity-80 dark:text-gray-300`}
                value={layout}
              >
                {layout.name === "List" ? layouts[0].icon : layouts[1].icon}
                <span
                  className={
                    layout.name === preferredLayout.name
                      ? "font-medium"
                      : "font-normal"
                  }
                >
                  {
                    // translate Grid || List
                    layout.name
                  }
                </span>
                {layout.name === preferredLayout.name && (
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <IconCheck width={16} height={16} />
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default LayoutSwitcher;
