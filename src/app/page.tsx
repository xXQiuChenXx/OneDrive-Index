import Breadcrumb from "@/components/Breadcrumb";
import LayoutSwitcher from "@/components/LayoutSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto container">
      <div className="py-10 sm:p-10">
        <div className="mb-4 flex items-center justify-between">
          <Breadcrumb />
          <LayoutSwitcher />
        </div>
      </div>
    </div>
  );
}
