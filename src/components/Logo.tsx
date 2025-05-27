import type { JSX } from "astro/jsx-runtime";
import type { FunctionComponent } from "react";

import type { LogoProps } from "../types/types.d.ts";

const Logo: FunctionComponent<LogoProps> = ({ id, title, className }: LogoProps): JSX.Element =>

  <svg className={className} viewBox='0 0 24 24'>
    <title>{title}</title>
    <use href={id}></use>
  </svg>

export default Logo