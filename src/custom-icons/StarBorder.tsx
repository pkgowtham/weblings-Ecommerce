import * as React from "react";
import type { SVGProps } from "react";
const SvgStarBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="m20.937 8.694-5.655-.513-2.209-5.439a1.15 1.15 0 0 0-2.15 0l-2.208 5.45-5.644.502c-1.028.085-1.448 1.43-.666 2.138l4.289 3.887-1.286 5.768c-.233 1.05.853 1.882 1.741 1.32L12 18.75l4.848 3.068c.888.562 1.975-.27 1.741-1.32l-1.285-5.78 4.288-3.887c.783-.708.374-2.053-.654-2.138m-8.939 7.772L7.605 19.24l1.168-5.23-3.879-3.52 5.118-.464L11.998 5.1l1.998 4.937 5.118.464-3.88 3.52 1.17 5.23z"
    />
  </svg>
);
export default SvgStarBorder;
