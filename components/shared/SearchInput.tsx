import { Input } from "@/components/ui/input";

interface Props {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeHolder?: string;
  className?: string;
}
export const SearchInput = (props: Props) => {
  const { leftIcon, rightIcon, placeHolder, className } = props;
  return (
    <Input
      placeHolder={placeHolder}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      className={className}
    />
  );
};
