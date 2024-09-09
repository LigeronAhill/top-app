import { HeaderProps } from "./header.props";

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={className} {...props}>
      Header
    </header>
  );
}
