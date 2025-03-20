import * as React from "react";
import type { SVGProps } from "react";
const SvgViewComfyAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#000">
      <path d="M11 7H7v4h4zM17 7h-4v4h4zM11 13H7v4h4zM17 13h-4v4h4z" />
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z" />
    </g>
  </svg>
);
export default SvgViewComfyAlt;
