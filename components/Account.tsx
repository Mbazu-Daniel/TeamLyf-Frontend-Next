import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { getNameAbbreviation } from "@/utils/getNameAbbreviation";

interface Props {
  title: string;
  description: string;
  src: string;
}
export const Account = ({
  title,
  description,
  src = "/assets/icons/avatar.svg",
}: Props) => {
  const fallBack = getNameAbbreviation(title);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={src} />

          <AvatarFallback>{fallBack}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-center items-start">
          <h5 className="text-primary text-sm font-bold">{title}</h5>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>

        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Workspace</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
