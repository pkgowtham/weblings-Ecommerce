import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#FE4C3F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M30 18 18 30m0-12 12 12m14-6c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20"
    />
  </svg>
);
export default SvgCircleX;
