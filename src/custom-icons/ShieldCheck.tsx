import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.999 16.612 2.666 2.667L20 13.945m6.666 4c0 6.667-4.666 10-10.213 11.934-.29.098-.606.093-.893-.014-5.56-1.92-10.227-5.253-10.227-11.92V8.612a1.333 1.333 0 0 1 1.333-1.333c2.667 0 6-1.6 8.32-3.627a1.56 1.56 0 0 1 2.027 0c2.333 2.04 5.653 3.627 8.32 3.627a1.333 1.333 0 0 1 1.333 1.333z"
    />
  </svg>
);
export default SvgShieldCheck;
