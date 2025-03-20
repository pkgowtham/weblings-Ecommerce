import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={57}
    fill="none"
    {...props}
  >
    <path
      stroke="#00812B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.667}
      d="m21 28.612 4.666 4.667 9.333-9.334m16.334 4.667c0 12.887-10.447 23.334-23.334 23.334-12.886 0-23.333-10.447-23.333-23.334 0-12.886 10.447-23.333 23.333-23.333 12.887 0 23.334 10.447 23.334 23.333"
    />
  </svg>
);
export default SvgCircleCheck;
