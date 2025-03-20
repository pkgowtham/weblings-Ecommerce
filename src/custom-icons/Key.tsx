import * as React from "react";
import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.666 10.612 3.067 3.066a1.333 1.333 0 0 0 1.866 0l2.8-2.8a1.333 1.333 0 0 0 0-1.866l-3.066-3.067m2.666-2.667-12.8 12.8m2.134 5.2a7.333 7.333 0 1 1-14.667 0 7.333 7.333 0 0 1 14.667 0"
    />
  </svg>
);
export default SvgKey;
