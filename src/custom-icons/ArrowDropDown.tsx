import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m8.707 11.414 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71h-5.18c-.89 0-1.33 1.08-.7 1.71"
    />
  </svg>
);
export default SvgArrowDropDown;
