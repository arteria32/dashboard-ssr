import { Block } from '@/_types/features/dashboard';
import { PropsWithChildren, ReactNode } from 'react';

export type WidgetWrapperProps = PropsWithChildren & DashboardBlockProps;

export type DashboardBlockProps = {
  block: Block;
  pageKey?: string;
  renderWidget: (props: WidgetWrapperProps) => ReactNode;
};
