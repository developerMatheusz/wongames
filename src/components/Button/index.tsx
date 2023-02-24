import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
};

export default function Button({
  children,
  size,
  fullWidth,
  icon
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
