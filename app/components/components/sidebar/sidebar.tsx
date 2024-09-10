import { MenuItem } from "@/interfaces/menu.interface";
import { SidebarProps } from "./sidebar.props";
import Menu from "./components/menu/menu";

export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div className={className} {...props}>
      <Menu />
    </div>
  );
}
