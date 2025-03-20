import * as React from "react";
import type { SVGProps } from "react";
const SvgClosered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#E10000"
      d="M12.2 4.306a.664.664 0 0 0-.94 0L8 7.56 4.74 4.3a.664.664 0 1 0-.94.94L7.06 8.5 3.8 11.76a.664.664 0 1 0 .94.94L8 9.44l3.26 3.26a.664.664 0 1 0 .94-.94L8.94 8.5l3.26-3.26a.67.67 0 0 0 0-.933"
    />
  </svg>
);
export default SvgClosered;
