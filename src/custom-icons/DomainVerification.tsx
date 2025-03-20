import * as React from "react";
import type { SVGProps } from "react";
const SvgDomainVerification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <mask
      id="domain_verification_svg__a"
      width={32}
      height={33}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 .5h32v32H0z" />
    </mask>
    <g mask="url(#domain_verification_svg__a)">
      <path
        fill="#3A3A3A"
        d="M5.333 27.167a2.57 2.57 0 0 1-1.884-.784 2.57 2.57 0 0 1-.783-1.883v-16q0-1.099.783-1.883a2.57 2.57 0 0 1 1.884-.784h21.333q1.1 0 1.883.784.784.783.784 1.883v16q0 1.1-.784 1.884a2.57 2.57 0 0 1-1.883.783zm0-2.667h21.333V11.167H5.333zm9.266-1.933-4.733-4.733 1.933-1.934 2.8 2.8 5.6-5.6 1.934 1.934z"
      />
    </g>
  </svg>
);
export default SvgDomainVerification;
