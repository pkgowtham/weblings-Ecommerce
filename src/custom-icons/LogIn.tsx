import * as React from "react";
import type { SVGProps } from "react";
const SvgLogIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 4.612h5.333A2.667 2.667 0 0 1 28 7.278v18.667a2.667 2.667 0 0 1-2.667 2.667H20m-6.667-5.333L20 16.612m0 0-6.667-6.667M20 16.612H4"
    />
  </svg>
);
export default SvgLogIn;
