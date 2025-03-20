import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreVert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="M9 6c.825 0 1.5-.675 1.5-1.5S9.825 3 9 3s-1.5.675-1.5 1.5S8.175 6 9 6m0 1.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5S9.825 7.5 9 7.5M9 12c-.825 0-1.5.675-1.5 1.5S8.175 15 9 15s1.5-.675 1.5-1.5S9.825 12 9 12"
    />
  </svg>
);
export default SvgMoreVert;
