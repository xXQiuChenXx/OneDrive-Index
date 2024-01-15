import Breadcrumb from "@/components/Breadcrumb";
import FileListing from "@/components/FileListing";
import LayoutSwitcher from "@/components/LayoutSwitcher";
import Image from "next/image";
import { getItems } from "@/utils/drive_req";

export default async function Home() {
  const items = await getItems();

  return (
    <div className="mx-auto container">
      <div className="py-10 sm:p-10">
        <div className="mb-4 flex items-center justify-between">
          <Breadcrumb />
          <LayoutSwitcher />
        </div>
        <FileListing items={items}/>
      </div>
    </div>
  );
}
