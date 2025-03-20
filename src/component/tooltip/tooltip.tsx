import React, { useRef, useState, forwardRef, useEffect } from 'react';
import { ToolTipProps } from './type';
import clsx from 'clsx';
import { useStyle } from './tooltipStyle';

const ToolTip = forwardRef<HTMLElement, ToolTipProps>(({
    children,
    className,
    parentRef,
    offsetTop = 0,
    offsetLeft = 0,
    width = 'auto',
    component: Component = 'p',
    offsetRight = 0,
    offsetBottom = 0,
    positionType = 'bottom',
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0,
    onMouseEnter,
    onMouseLeave,
}, ref) => {
    
    const classes = useStyle();
    const tooltipRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
    const [visible, setVisible] = useState<boolean>(false);
    let showTimeout: number;

    useEffect(() => {
        const parentElement = parentRef.current;
        const tooltipElement = tooltipRef.current;

        if (parentElement && tooltipElement) {
            const updatePosition = () => {
                const parentRect = parentElement.getBoundingClientRect();
                const tooltipRect = tooltipElement.getBoundingClientRect();

                let top = 0, left = 0;

                switch (positionType) {
                    case 'top':
                        top = parentRect.top - tooltipRect.height - offsetTop;
                        left = parentRect.left + offsetLeft;
                        break;
                    case 'bottom':
                        top = parentRect.bottom + offsetBottom;
                        left = parentRect.left + offsetLeft;
                        break;
                    case 'left':
                        top = parentRect.top + offsetTop;
                        left = parentRect.left - tooltipRect.width - offsetLeft;
                        break;
                    case 'right':
                        top = parentRect.top + offsetTop;
                        left = parentRect.right + offsetRight;
                        break;
                    default:
                        top = parentRect.bottom + offsetBottom;
                        left = parentRect.left + offsetLeft;
                        break;
                }

                // Ensure tooltip stays within the viewport
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                if (left + tooltipRect.width > viewportWidth) {
                    left = viewportWidth - tooltipRect.width - 10;
                }
                if (left < 0) {
                    left = 10;
                }
                if (top < 0) {
                    top = parentRect.bottom + offsetBottom;
                }
                if (top + tooltipRect.height > viewportHeight) {
                    top = parentRect.top - tooltipRect.height - offsetTop;
                }

                setPosition({ top, left });
            };

            const handleMouseEnter = () => {
                clearTimeout(showTimeout);
                showTimeout = window.setTimeout(() => {
                    setVisible(true);
                    updatePosition();
                    onMouseEnter && onMouseEnter();
                }, mouseEnterDelay);
            };

            const handleMouseLeave = () => {
                clearTimeout(showTimeout);
                showTimeout = window.setTimeout(() => {
                    setVisible(false);
                    onMouseLeave && onMouseLeave();
                }, mouseLeaveDelay);
            };

            parentElement.addEventListener('mouseenter', handleMouseEnter);
            parentElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                parentElement.removeEventListener('mouseenter', handleMouseEnter);
                parentElement.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [parentRef, offsetTop, offsetLeft, offsetRight, offsetBottom, positionType, mouseEnterDelay, mouseLeaveDelay, onMouseEnter, onMouseLeave]);

    // // Prevent rendering the tooltip until position is calculated
    // if (!position) {
    //     return null;
    // }



    return (
        <Component
            className={clsx(classes.toolTip, className, {
                [classes.visible]: visible,
                'shake': visible,
            })}
            style={{
                top: `${position?.top}px`,
                left: `${position?.left}px`,
                width,
                visibility: position && visible ? 'visible' : 'hidden', // Prevent flash
            }}
            ref={tooltipRef || ref}
        >
           {children}
        </Component>
    );
});

export default ToolTip;
