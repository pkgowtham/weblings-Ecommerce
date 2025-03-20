import * as React from "react";
import type { SVGProps } from "react";
const SvgDone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M5.866 10.603 3.533 8.27a.656.656 0 0 0-.934 0 .656.656 0 0 0 0 .933l2.794 2.794c.26.26.68.26.94 0l7.066-7.06a.656.656 0 0 0 0-.934.656.656 0 0 0-.933 0z"
    />
  </svg>
);
export default SvgDone;
