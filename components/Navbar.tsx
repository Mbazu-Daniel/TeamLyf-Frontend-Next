import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./shared/SearchInput";
import { SearchIcon } from "lucide-react";

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
  );
};
