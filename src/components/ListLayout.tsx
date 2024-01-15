"use client";
import React from "react";
import { Checkbox } from "./Checkbox";
import Link from "next/link";
import { IconDots, IconFolder } from "@tabler/icons-react";

interface Props {
  items: any;
  selected: { [key: string]: boolean };
  toggleTotalSelected: () => void;
  toggleItemSelected: (id: string) => void;
  totalSelected: 0 | 1 | 2;
}

const ListLayout = ({
  items,
  selected,
  totalSelected,
  toggleTotalSelected,
  toggleItemSelected,
}: Props) => {
  return (
    <div className="rounded bg-white shadow-sm dark:bg-gray-900 dark:text-gray-100">
      <div className="grid grid-cols-12 items-center space-x-2 border-b border-gray-900/10 px-3 dark:border-gray-500/30">
        <div className="col-span-12 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:col-span-7 flex items-center">
          <div className="px-2 text-xs font-bold  tracking-widest inline-block">
            <Checkbox
              checked={totalSelected}
              indeterminate={true}
              onChange={toggleTotalSelected}
              // translate
              title="Select Files"
            />
          </div>
          {/* translate */}
          Name
        </div>
        <div className="col-span-3 hidden text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:block">
          {/* translate */}
          Last Modified
        </div>
        <div className="hidden text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:block">
          {/* translate */}
          Size
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:block">
          {/* translate */}
          Actions
        </div>
      </div>

      {items.map((item: any) => {
        return (
          <div
            className="grid grid-cols-12 transition-all duration-100 hover:bg-gray-100 dark:hover:bg-gray-850"
            key={item.id}
          >
            <Link
              //  href={`${path === '/' ? '' : path}/${encodeURIComponent(c.name)}`}
              href="/"
              passHref
              className="col-span-12"
            >
              <div className="grid cursor-pointer grid-cols-12 items-center space-x-2 px-3 py-2.5">
                <div
                  className="col-span-10 flex items-center space-x-2 truncate md:col-span-7"
                  title={item.name}
                >
                  <div className="px-2 text-xs font-bold  tracking-widest inline-block ">
                    <Checkbox
                      checked={selected[item.id] ? 2 : 0}
                      onChange={() => toggleItemSelected(item.id)}
                      indeterminate={true}
                      // translate
                      title="Select Files"
                    />
                  </div>

                  <div className="w-5 flex-shrink-0 text-center">
                    <IconFolder />
                  </div>
                  <span
                    className="truncate before:float-right before:content-[attr(data-tail)]"
                    // data-tail={extension}
                  >
                    {item.name}
                  </span>
                  {/* <ChildName name={c.name} folder={Boolean(c.folder)} /> */}
                </div>

                <div className="col-span-3 hidden flex-shrink-0 font-mono text-sm text-gray-700 dark:text-gray-500 md:block">
                  {item.lastModifiedDateTime}
                  {/* {formatModifiedDateTime(c.lastModifiedDateTime)} */}
                </div>

                <div className="col-span-1 flex-shrink-0 truncate font-mono text-sm text-gray-700 dark:text-gray-500 md:block">
                  {item.size}
                  {/* {humanFileSize(c.size)} */}
                </div>

                <div className="col-span-1 ">
                  <IconDots className="mx-auto w-full" />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListLayout;
