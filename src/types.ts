import { ReactElement } from "react";

export type ComponentConstructor<TProps extends {} = {}> = (
  props: TProps
) => ReactElement | null;

/// with GetLayout
export interface GetLayout {
  getLayout: (page: ReactElement) => ReactElement;
}

export type LayoutPage<TProps = {}> = ComponentConstructor<TProps> & GetLayout;

export type LayoutComponent<
  TLayoutProps extends Record<string, unknown> = Record<string, unknown>
> = ComponentConstructor<TLayoutProps> & LayoutCommonProps;

/// With Config

export type LayoutConfigPage<TProps = {}> = ComponentConstructor<TProps> &
  LayoutConfig;

export type LayoutCommonProps = {
  initialDimensions?: { height: number };
};

export type LayoutReactElement<
  TLayoutProps extends Record<string, unknown> = Record<string, unknown>
> = ReactElement<TLayoutProps, LayoutComponent>;

export interface LayoutConfig {
  layoutConfig?: { navbar: LayoutReactElement };
}
