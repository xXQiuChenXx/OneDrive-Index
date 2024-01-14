import React from "react";
import { Checkbox } from "./Checkbox";

const ListLayout = () => {
  console.log("test");
  return (
    <div className="rounded bg-white shadow-sm dark:bg-gray-900 dark:text-gray-100">
      <div className="grid grid-cols-12 items-center space-x-2 border-b border-gray-900/10 px-3 dark:border-gray-500/30">
        <div className="col-span-12 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:col-span-7 flex items-center">
          <div className="px-2 text-xs font-bold  tracking-widest inline-block ">
            <Checkbox
              checked={0}
              onChange={() => console.log("changed")}
              indeterminate={true}
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
    </div>
  );
};

export default ListLayout;
