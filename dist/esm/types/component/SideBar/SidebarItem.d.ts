import React from "react";
import "./styles.scss";
import { SidebarItemConfig } from "./types";
interface SidebarItemStyle {
    wrapper?: string;
    header?: string;
    link?: string;
    icon?: string;
    title?: string;
    expandIcon?: string;
    subItemLink?: string;
    subTitle?: string;
}
interface SidebarItemProps {
    item: SidebarItemConfig;
    isOpen: boolean;
    linkClassName?: string;
    itemStyle?: SidebarItemStyle;
}
declare const SidebarItem: React.FC<SidebarItemProps>;
export default SidebarItem;
