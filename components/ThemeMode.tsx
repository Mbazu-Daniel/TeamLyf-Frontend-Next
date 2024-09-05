"use client";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const ThemeModeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const onChangeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Button
      intent="outline"
      size="sm"
      onClick={onChangeMode}
      className="py-1 rounded-full bg-purple-100 dark:bg-primary-foreground ring-1 ring-gray-200 focus:ring-purple-100 ring-offset-2 outline-[none]"
      label={
        <span className="block relative">
          <Image
            src="/assets/icons/light-mode.svg"
            alt="icon"
            width={24}
            height={24}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="sr-only">Toggle Theme</span>
        </span>
      }
    ></Button>
  );
};
