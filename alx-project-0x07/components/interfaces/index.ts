import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface HeaderProps {
    title: string;
}

export interface FooterProps {
    year: number;
}
