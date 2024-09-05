import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./shared/SearchInput";
import { SearchIcon } from "lucide-react";
import { Switcher } from "./shared/Switcher";
import { toolsSwitcher } from "@/constants/switcher/example";
import { ThemeModeSwitcher } from "@/components/ThemeMode";
import { Notification } from "@/components/shared/Notification";
import { NotificationIcon } from "@/components/icons/notificationIcon";
import { Account } from "@/components/Account";

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

        <ThemeModeSwitcher />

        <Notification count={2000} image={<NotificationIcon />} />

        <Account
          title="Kris Daniel"
          description="Product Manager"
          src="/assets/icons/avatar.svg"
        />
      </div>
    </div>
  );
};
