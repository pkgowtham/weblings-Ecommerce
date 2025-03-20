import * as React from "react";
import type { SVGProps } from "react";
const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M26.666 5.833H5.333A2.646 2.646 0 0 0 2.679 8.5l-.013 16a2.657 2.657 0 0 0 2.667 2.667h21.333a2.66 2.66 0 0 0 2.667-2.667v-16a2.657 2.657 0 0 0-2.667-2.667m0 18.667H5.333v-8h21.333zm0-13.333H5.333V8.5h21.333z"
    />
  </svg>
);
export default SvgPayment;
