import * as React from "react";
import type { SVGProps } from "react";
const SvgRemovePerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g fill="#3A3A3A">
      <path d="M10.125 6a3 3 0 1 0-6 0 3 3 0 1 0 6 0m-1.5 0c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5.675-1.5 1.5-1.5 1.5.675 1.5 1.5M1.125 13.5V15h12v-1.5c0-1.995-3.998-3-6-3-2.003 0-6 1.005-6 3m1.5 0c.15-.533 2.475-1.5 4.5-1.5 2.018 0 4.328.96 4.5 1.5zM16.875 7.5h-4.5V9h4.5z" />
    </g>
  </svg>
);
export default SvgRemovePerson;
