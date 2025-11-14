import React from 'react';
import { formatTextRich } from '@/lib/formatText';

// script to transform <br> tags coming from the backend into line breaks in the frontend
export function Text({
  children,
  as: Component = 'span',
  className,
  ...props
}: {
  children?: React.ReactNode;
  as?: any;
  className?: string;
  [key: string]: any;
}) {
  // If children is a string, apply rich formatting (<green> tags + <br> handling)
  const content = typeof children === 'string' ? formatTextRich(children) : children;
  return React.createElement(Component as any, { className, ...props }, content);
}
