import { SidebarProps } from "./sidebar.props";

export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={className} {...props}>
      Sidebar
    </div>
  );
}
