import { ComponentProps } from "react";

type ColType = {
  children?: React.ReactNode;
  className?: string;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  flex?: boolean;
  offsetXs?: number;
  offsetSm?: number;
  offsetMd?: number;
  offsetLg?: number;
  gap?: number;
};

export type WrapperStyledProps = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  flex: boolean;
  offsetXs: number;
  offsetSm: number;
  offsetMd: number;
  offsetLg: number;
  gap?: number;
};

export type SizeMetricProps = Record<number, string>;

export type ColProps = ComponentProps<"div"> & ColType;
