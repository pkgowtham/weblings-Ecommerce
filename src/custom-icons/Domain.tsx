import * as React from "react";
import type { SVGProps } from "react";
const SvgDomain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={65}
    fill="none"
    {...props}
  >
    <path
      fill="#3A3A3A"
      d="M32 19.167V8.5H5.335v48h53.333V19.167zm-16 32h-5.333v-5.334h5.334zM16 40.5h-5.333v-5.333h5.334zm0-10.667h-5.333V24.5h5.334zm0-10.666h-5.333v-5.334h5.334zm10.667 32h-5.333v-5.334h5.333zm0-10.667h-5.333v-5.333h5.333zm0-10.667h-5.333V24.5h5.333zm0-10.666h-5.333v-5.334h5.333zm26.667 32H32.001v-5.334h5.333V40.5h-5.333v-5.333h5.333v-5.334h-5.333V24.5h21.333zm-5.333-21.334h-5.334v5.334h5.334zM48 40.5h-5.334v5.333h5.334z"
    />
  </svg>
);
export default SvgDomain;
