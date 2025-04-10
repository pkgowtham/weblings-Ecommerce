import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#595959"
      d="M20.666 22.5a3.343 3.343 0 0 0-3.333 3.333c0 1.834 1.5 3.334 3.333 3.334S24 27.667 24 25.833C24 24 22.5 22.5 20.666 22.5m10-8.333H29v-3.334c0-4.6-3.734-8.333-8.334-8.333A8.326 8.326 0 0 0 12.6 8.75c-.234.9.3 1.8 1.2 2.033.883.234 1.8-.3 2.033-1.2a4.994 4.994 0 0 1 4.833-3.75c2.75 0 5 2.25 5 5v3.334h-15A3.343 3.343 0 0 0 7.333 17.5v16.667c0 1.833 1.5 3.333 3.333 3.333h20C32.5 37.5 34 36 34 34.167V17.5c0-1.833-1.5-3.333-3.334-3.333m0 18.333c0 .917-.75 1.667-1.666 1.667H12.333c-.917 0-1.667-.75-1.667-1.667V19.167c0-.917.75-1.667 1.667-1.667H29c.916 0 1.666.75 1.666 1.667z"
    />
  </svg>
);
export default SvgLock;
