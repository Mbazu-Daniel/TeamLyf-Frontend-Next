import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./shared/SearchInput";
import { SearchIcon } from "lucide-react";
import { Switcher } from "./shared/Switcher";
import { toolsSwitcher } from "@/constants/switcher/example";
import { ThemeModeSwitcher } from "@/components/ThemeMode";

export const Navbar = () => {
  return (
    <div className="bg-custom-200 py-6 px-3 flex justify-between items-center">
      <Link href="/" className="shrink-0">
        <Image src="/assets/icons/logo.svg" alt="logo" width={50} height={50} />
      </Link>
      <SearchInput
        leftIcon={<SearchIcon className="w-5 h-5" stroke="#828282" />}
        placeHolder="search for projects, tasks, files, members..."
        className="w-80"
      />
      <div className="flex gap-2 items-center">
        <Switcher items={toolsSwitcher} heading="Settings" />
        <div>notification</div>
        <div>Account</div>

        <ThemeModeSwitcher />
      </div>
    </div>
  );
};
