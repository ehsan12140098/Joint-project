import { styled } from "styled-components";
import { MAIN_TEXT_REGULAR } from "../../styles/globalTypography";
import { Spinner } from "./Spinner";

const BaseButton = ({
  title = "",
  variant = "primary",
  fullWidth = false,
  isLoading = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      fullwidth={fullWidth ? "true" : "false"}
      disabled={isLoading}
      {...props}
    >
      {title}
    </StyledButton>
  );
};

export default BaseButton;

const StyledButton = styled("button")`
  background: ${({ variant, theme }) =>
    variant === "primary"
      ? theme.colors.dark
      : variant === "secondary"
      ? theme.colors.light
      : "transparent"};
  color: ${({ variant, theme }) =>
    variant === "primary"
      ? theme.colors.white
      : variant === "secondary"
      ? theme.colors.dark
      : theme.colors.white};
  width: ${({ fullwidth }) => (fullwidth === "true" ? "100%" : "auto")};
  padding: 6px;
  border: none;
  ${MAIN_TEXT_REGULAR}
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
