import * as React from "react";
import type { SVGProps } from "react";
const SvgBuy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#3A3A3A"
      d="M13.172 10c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1m-5 9c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a1 1 0 0 0-.4-1.34.996.996 0 0 0-1.36.41l-3.23 6.1h-7.02l-4.26-9h-2.27c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h11c.55 0 1-.45 1-1s-.45-1-1-1h-11z"
    />
  </svg>
);
export default SvgBuy;
