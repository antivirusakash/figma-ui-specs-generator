import * as React from 'react';
import { cn } from '../lib/utils';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'h-11 w-full rounded-md border border-input bg-background px-2 text-[13px] tracking-[-0.01em] text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));

Input.displayName = 'Input';
