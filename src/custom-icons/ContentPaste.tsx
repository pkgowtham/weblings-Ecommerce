import * as React from "react";
import type { SVGProps } from "react";
const SvgContentPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M25.333 4.5H19.76C19.2 2.953 17.733 1.833 16 1.833s-3.2 1.12-3.76 2.667H6.667A2.675 2.675 0 0 0 4 7.167V28.5c0 1.467 1.2 2.667 2.667 2.667h18.666c1.467 0 2.667-1.2 2.667-2.667V7.167C28 5.7 26.8 4.5 25.333 4.5M16 4.5c.733 0 1.333.6 1.333 1.333 0 .734-.6 1.334-1.333 1.334s-1.333-.6-1.333-1.334c0-.733.6-1.333 1.333-1.333m9.333 24H6.667V7.167h2.666v4h13.334v-4h2.666z"
    />
  </svg>
);
export default SvgContentPaste;
