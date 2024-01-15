"use client";

import toast, { Toaster } from "react-hot-toast";
import { layouts } from "./LayoutSwitcher";
import useLocalStorage from "@/utils/useLocalStorage";
import GridLayout from "@/components/GridLayout";
import ListLayout from "@/components/ListLayout";
import { SetStateAction, useState } from "react";
import { OdItemsObject } from "@/types";

const FileListing = ({ items }: { items: OdItemsObject["value"] }) => {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [totalSelected, setTotalSelected] = useState<0 | 1 | 2>(0);
  const [layout, setLayout] = useLocalStorage("preferredLayout", layouts[0]);

  const genTotalSelected = (selected: { [key: string]: boolean }) => {
    const selectInfo = items.map(c => Boolean(selected[c.id]))
    const [hasT, hasF] = [selectInfo.some(i => i), selectInfo.some(i => !i)]
    return hasT && hasF ? 1 : !hasF ? 2 : 0
  }

  const toggleItemSelected = (id: string) => {
    let val: SetStateAction<{ [key: string]: boolean }>;
    if (selected[id]) {
      val = { ...selected };
      delete val[id];
    } else {
      val = { ...selected, [id]: true };
    }
    setSelected(val);
    setTotalSelected(genTotalSelected(val))
  };

  const toggleTotalSelected = () => {
    if (totalSelected === 2) {
      setSelected({});
      setTotalSelected(0);
    } else {
      setSelected(Object.fromEntries(items.map(c => [c.id, true])));
      setTotalSelected(2);
    }
  };

  return (
    <>
      <Toaster />

      {layout.name === "Grid" ? (
        <GridLayout />
      ) : (
        <ListLayout
          selected={selected}
          items={items}
          totalSelected={totalSelected}
          toggleItemSelected={toggleItemSelected}
          toggleTotalSelected={toggleTotalSelected}
        />
      )}
    </>
  );
};

export default FileListing;
