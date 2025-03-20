export interface ToolTipProps {
    children:string;
    className?:string;
    offsetTop?: number;
    offsetLeft?: number;
    offsetRight?:number;
    offsetBottom?:number;
    positionType?:string;
    parentRef:any;
    width?: string | number;
    component?: React.ElementType;
    mouseEnterDelay?: number; 
    mouseLeaveDelay?:number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}