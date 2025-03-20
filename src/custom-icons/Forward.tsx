import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="M3.75 14.25v-3q0-.937.656-1.594A2.17 2.17 0 0 1 6 9h6.881l-2.7 2.7 1.069 1.05 4.5-4.5-4.5-4.5-1.069 1.05 2.7 2.7H6a3.61 3.61 0 0 0-2.653 1.097A3.61 3.61 0 0 0 2.25 11.25v3z"
    />
  </svg>
);
export default SvgForward;
