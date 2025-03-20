import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <path
      stroke="#151515"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="M16 17.945a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333m0 0a10.666 10.666 0 0 1 10.666 10.667M16 17.945A10.667 10.667 0 0 0 5.333 28.612"
    />
  </svg>
);
export default SvgUserRound;
