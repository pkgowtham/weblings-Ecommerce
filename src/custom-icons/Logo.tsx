import * as React from "react";
import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#3395FF"
      d="M54.359 7.446a.677.677 0 0 0-.248-.925c-6.238-3.602-14.214-1.465-17.815 4.773L27.113 27.2a6.86 6.86 0 1 0 11.88 6.86z"
    />
    <path
      fill="#3395FF"
      d="M.339 7.446a.677.677 0 0 1 .248-.925C6.824 2.919 14.8 5.056 18.4 11.294L27.585 27.2a6.86 6.86 0 0 1-11.88 6.86z"
    />
    <path
      fill="#0070E8"
      fillRule="evenodd"
      d="M32.574 16.419a6.86 6.86 0 0 1 .573 7.703l-5.706 9.883a7 7 0 0 1-.227.367 7 7 0 0 1-.172-.282l-5.706-9.882a6.86 6.86 0 0 1 11.238-7.79"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLogo;
