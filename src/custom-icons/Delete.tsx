import * as React from "react";
import type { SVGProps } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="M12 6.75v7.5H6v-7.5zm-.979-4.354a.5.5 0 0 0-.353-.146H7.332a.5.5 0 0 0-.353.146L6.375 3H4.25a.5.5 0 0 0-.5.5V4a.5.5 0 0 0 .5.5h9.5a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-2.125zM13.5 5.75a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v8.5c0 .825.675 1.5 1.5 1.5h6c.825 0 1.5-.675 1.5-1.5z"
    />
  </svg>
);
export default SvgDelete;
