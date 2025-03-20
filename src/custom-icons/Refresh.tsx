import * as React from "react";
import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 16.612a12 12 0 0 1 12-12 13 13 0 0 1 8.987 3.653L28 11.28m0 0V4.612m0 6.667h-6.667M28 16.612a12 12 0 0 1-12 12 13 13 0 0 1-8.987-3.653L4 21.945m0 0h6.667m-6.667 0v6.667"
    />
  </svg>
);
export default SvgRefresh;
