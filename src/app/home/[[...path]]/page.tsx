import Breadcrumb from "@/components/Breadcrumb";
import FileListing from "@/components/FileListing";
import LayoutSwitcher from "@/components/LayoutSwitcher";
import Image from "next/image";
import { getItems } from "@/utils/drive_req";

export default async function Home({ params }: { params: { path: Array<string>  } }) {
  const items = await getItems(params.path);
  return (
    <div className="mx-auto container">
      <div className="py-10 sm:p-10">
        <div className="mb-4 flex items-center justify-between">
          <Breadcrumb pathname={params.path} />
          <LayoutSwitcher />
        </div>
        <FileListing items={items}  pathname={params.path}/>
      </div>
    </div>
  );
}
