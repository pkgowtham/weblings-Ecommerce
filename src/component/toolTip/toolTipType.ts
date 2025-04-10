export interface toolTipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    delay?:any,
    disabled?: boolean,
    className?: string;
    contentClassName?: string;
}