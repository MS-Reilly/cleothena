import React from "react";
import "./styles.scss";
import { SidebarItemConfig } from "./types";
interface SidebarItemProps {
    item: SidebarItemConfig;
    isOpen: boolean;
}
declare const SidebarItem: React.FC<SidebarItemProps>;
export default SidebarItem;
