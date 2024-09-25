import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  count: number;
  image: React.ReactNode;
}

export const Notification = ({ className, count, image }: Props) => {
  if (count > 99) count = 99;

  return (
    <div className={cn("relative w-6 h-6", className)}>
      <span className="absolute -top-1 -right-1 bg-red-300 text-muted min-w-4 min-h-4 rounded-md flex justify-center items-center text-[.5rem] font-semibold p-[.1rem]">
        {count}+
      </span>
      {image}
    </div>
  );
};
