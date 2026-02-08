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
        <div className={cn(
          "flex items-center gap-3 mb-4",
          centered && "justify-center"
        )}>
          <div className="accent-divider" />
          <span className={cn(
            "text-sm font-semibold tracking-wider uppercase text-blue-400",
            labelClassName
          )}>
            {label}
          </span>
          {centered && <div className="accent-divider" />}
        </div>
      )}
      <h2 className={cn(
        "text-slate-900 dark:text-white mb-4 uppercase tracking-wide",
        titleClassName
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-slate-500 dark:text-slate-400 leading-relaxed normal-case tracking-normal",
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

