import { type SVGProps } from 'react';

export default function Zkproof(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VSCodium logo"
      {...props}
    >
      <defs>
        <linearGradient id="vscodium-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22a6f2" />
          <stop offset="100%" stopColor="#0078d7" />
        </linearGradient>
      </defs>

      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="url(#vscodium-gradient)"
        d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
      />
    </svg>
  );
}
