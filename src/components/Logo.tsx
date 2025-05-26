import type { JSX } from "astro/jsx-runtime";
import type { FunctionComponent } from "react";

interface Props {
  id: string;
  title: string;
  className?: string;
}
const Logo: FunctionComponent<Props> = ({ id, title, className }: Props): JSX.Element =>

  <svg className={className} viewBox='0 0 24 24'>
    <title>{title}</title>
    <use href={id}></use>
  </svg>

export default Logo