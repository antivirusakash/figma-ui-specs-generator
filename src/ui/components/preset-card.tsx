import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';

type PresetCardProps = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

export const PresetCard = ({ title, description, selected, onClick }: PresetCardProps) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onClick}
    className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left transition-colors ${
      selected
        ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
        : 'border-border bg-background/60 hover:bg-accent/40'
    }`}
  >
    <div className="mt-0.5 shrink-0">
      {selected ? (
        <CheckCircle size={18} weight="fill" className="text-primary" />
      ) : (
        <div className="h-[18px] w-[18px] rounded-full border-2 border-muted-foreground/40" />
      )}
    </div>
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-[14px] font-medium tracking-[-0.012em] text-foreground">{title}</span>
      <span className="text-[12px] leading-[1.42] text-muted-foreground">{description}</span>
    </div>
  </button>
);
