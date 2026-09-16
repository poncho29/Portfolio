import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Inline SVG monogram mark for "Sebastián Meneses".
 * Rendered as a rounded-square gradient chip with the initials "SM".
 * Purely decorative — the accessible name lives on the wrapping <Link>.
 */
export const LogoSM = ({ className, ...props }: Props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="logo-sm-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--brand))" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#logo-sm-gradient)" />
    <text
      x="16"
      y="17"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="13"
      fontWeight="700"
      letterSpacing="-0.5"
      fill="#ffffff"
    >
      SM
    </text>
  </svg>
);
