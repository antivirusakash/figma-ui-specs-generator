import React from 'react';

type CollapsibleSectionProps = {
  title: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string;
  hidden?: boolean;
  children: React.ReactNode;
};

const panelClass =
  'rounded-2xl border border-border bg-card p-4 shadow-[0_1px_0_rgba(0,0,0,0.03)]';

export const CollapsibleSection = ({
  title,
  icon,
  defaultOpen = false,
  badge,
  hidden = false,
  children
}: CollapsibleSectionProps) => {
  if (hidden) return null;

  return (
    <details className={panelClass} open={defaultOpen || undefined}>
      <summary className="flex cursor-pointer items-center gap-2 list-none">
        <svg
          className="chevron h-4 w-4 shrink-0 text-muted-foreground"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06L9.44 8 6.22 4.78a.75.75 0 0 1 0-1.06Z" />
        </svg>
        {icon ? <span className="text-primary">{icon}</span> : null}
        <span className="text-[15px] font-semibold tracking-[-0.015em] text-foreground">{title}</span>
        {badge ? (
          <span className="ml-auto rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[10px] font-medium tracking-[-0.01em] text-muted-foreground">
            {badge}
          </span>
        ) : null}
      </summary>
      <div className="mt-3 space-y-3">{children}</div>
    </details>
  );
};
