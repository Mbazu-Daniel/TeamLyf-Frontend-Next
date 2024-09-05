"use client";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { WrenchIcon } from "@/components/icons/wrenchIcon";

type ItemProps = {
  value: string;
  label: string;
};

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
interface SwitcherProps extends PopoverTriggerProps {
  items: ItemProps[];
  heading: string;
}

export const Switcher = ({ className, heading, items = [] }: SwitcherProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const currentItem = value
    ? items.find((item) => item.value === value)?.label
    : "select";

  const onItemSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            intent="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select"
            className={cn(
              "w-32 bg-white rounded-xl text-gray-3 px-1",
              className,
            )}
            label={<span className="inline-block truncate">{currentItem}</span>}
            leftIcon={<WrenchIcon className="shrink-0" />}
            rightIconStyle="ml-auto"
            rightIcon={<ChevronDown className="h-4 w-4 shrink-0 opacity-50" />}
          />
        </PopoverTrigger>
        <PopoverContent className="w-32 p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search..." />
              <CommandEmpty className="text-xs text-muted-foreground flex justify-center m-2">
                No result found.
              </CommandEmpty>
              <CommandGroup heading={heading}>
                {items.map((item) => {
                  return (
                    <CommandItem
                      key={item.value}
                      onSelect={() => onItemSelect(item.value)}
                      className="text-sm cursor-pointer"
                      value={item.value}
                    >
                      <WrenchIcon className="mr-2" />
                      {item.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          currentItem === item.label
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};
