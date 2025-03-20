import * as React from "react";
import type { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="m3.51 6.03 7.51 3.22-7.52-1zm7.5 8.72L3.5 17.97v-2.22zM1.51 3l-.01 7 15 2-15 2 .01 7 20.99-9z"
    />
  </svg>
);
export default SvgSend;
