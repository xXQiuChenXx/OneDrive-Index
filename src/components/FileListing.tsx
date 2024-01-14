"use client"
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { layouts } from "./LayoutSwitcher";
import useLocalStorage from "@/utils/useLocalStorage";
import GridLayout from "./GridLayout";
import ListLayout from "./ListLayout";

const FileListing = () => {
  const [layout, setLayout] = useLocalStorage(
    "preferredLayout",
    layouts[0]
  );

  return (
    <>
      <Toaster />

      {layout.name === 'Grid' ? <GridLayout  /> : <ListLayout  />}

    </>
  );
};

export default FileListing;
