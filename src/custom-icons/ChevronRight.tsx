import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9 6.71a.996.996 0 0 0 0 1.41L12.88 12 9 15.88a.996.996 0 1 0 1.41 1.41L15 12.7a.996.996 0 0 0 0-1.41L10.41 6.7c-.38-.38-1.02-.38-1.41.01"
    />
  </svg>
);
export default SvgChevronRight;
