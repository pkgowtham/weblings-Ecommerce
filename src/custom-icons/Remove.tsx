import * as React from "react";
import type { SVGProps } from "react";
const SvgRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M19 13H5v-2h14z" />
  </svg>
);
export default SvgRemove;
