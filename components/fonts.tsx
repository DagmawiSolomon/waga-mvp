import { Montserrat, Open_Sans } from "next/font/google";

export const header_font = Montserrat({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
});

export const body_font = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});