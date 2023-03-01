import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

export default function Button({
  children,
  size,
  fullWidth,
  minimal = false,
  icon
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      minimal={minimal}
      hasIcon={!!icon}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
