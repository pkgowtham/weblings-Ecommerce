import * as React from "react";
import type { SVGProps } from "react";
const SvgMailBorder = (props: SVGProps<SVGSVGElement>) => (
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
      d="m29.333 9.945-11.96 7.6a2.59 2.59 0 0 1-2.747 0l-11.96-7.6m2.667-4h21.333a2.667 2.667 0 0 1 2.667 2.667v16a2.667 2.667 0 0 1-2.667 2.667H5.333a2.667 2.667 0 0 1-2.667-2.667v-16a2.667 2.667 0 0 1 2.667-2.667"
    />
  </svg>
);
export default SvgMailBorder;
