import * as React from "react";
import type { SVGProps } from "react";
const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m3.587.707-2.59 2.59a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71v-5.18c0-.89-1.08-1.33-1.71-.7"
    />
  </svg>
);
export default SvgVector;
