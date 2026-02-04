import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className,
  labelClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "max-w-3xl",
      centered && "mx-auto text-center",
      className
    )}>
      {label && (
        <span className={cn(
          "inline-block text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-3",
          labelClassName
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        "text-white mb-4",
        titleClassName
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-slate-400 leading-relaxed",
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

