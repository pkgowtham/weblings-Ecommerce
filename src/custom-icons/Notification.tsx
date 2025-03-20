import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9 16.313c.825 0 1.5-.675 1.5-1.5h-3c0 .824.675 1.5 1.5 1.5m4.793-4.208a1 1 0 0 1-.293-.707V8.063c0-2.303-1.223-4.23-3.375-4.74v-.51c0-.623-.502-1.126-1.125-1.126s-1.125.503-1.125 1.126v.51C5.73 3.832 4.5 5.752 4.5 8.063v3.335a1 1 0 0 1-.293.707l-1.052 1.052a.53.53 0 0 0 .375.906h10.94a.53.53 0 0 0 .375-.906zM12 12.562H6v-4.5c0-1.86 1.133-3.374 3-3.374s3 1.515 3 3.375z"
    />
  </svg>
);
export default SvgNotification;
