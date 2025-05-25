import React from "react";
import "./styles.scss";
import { SidebarItemConfig } from "./types";
interface SidebarItemStyle {
    wrapperStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    expandIconStyle?: React.CSSProperties;
    subItemLinkStyle?: React.CSSProperties;
    subTitleStyle?: React.CSSProperties;
}
interface SidebarItemProps {
    item: SidebarItemConfig;
    isOpen: boolean;
    itemStyle?: SidebarItemStyle;
}
declare const SidebarItem: React.FC<SidebarItemProps>;
export default SidebarItem;
