import { memo } from "react";
import Icon from "../Icon";
import { Name } from "../Icon/types";
import { AccordionTitleProps } from "./types";
import { Header, Title } from "./Accordion.styles";

export const AccordionTitle = memo(
  (
    {
      children,
      className,
      closeIcon = "plus",
      openIcon = "minus",
      color = "rgb(0, 0, 0)",
      onChange,
      expandedPanel,
      targetId,
    }: AccordionTitleProps,
    props
  ) => {
    const toggleIcon = expandedPanel === targetId ? openIcon : closeIcon;
    return (
      <Title
        className={className}
        {...props}
        type="button"
        onClick={() => onChange(targetId)}
      >
        <Header>{children}</Header>
        <Icon name={toggleIcon as Name} color={color} />
      </Title>
    );
  }
);