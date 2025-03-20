import * as React from "react";
import type { SVGProps } from "react";
const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="M14.25 14.25v-3a2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 12 9H5.119l2.7 2.7-1.069 1.05-4.5-4.5 4.5-4.5L7.819 4.8l-2.7 2.7H12q1.556 0 2.653 1.097t1.097 2.653v3z"
    />
  </svg>
);
export default SvgReply;
