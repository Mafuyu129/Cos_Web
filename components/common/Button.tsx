import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#0038AE] via-[#0648D8] to-[#48ACD6] text-white shadow-[0_10px_28px_-6px_rgba(0,56,174,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-6px_rgba(72,172,214,0.55)] border border-white/15",
  secondary:
    "border border-[#0038AE]/25 bg-white/90 text-[#0038AE] shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-[#0038AE] hover:bg-[#0038AE]/5 dark:border-[#48ACD6]/35 dark:bg-white/[0.06] dark:text-white dark:hover:border-[#48ACD6] dark:hover:bg-[#48ACD6]/15",
  ghost:
    "text-text-dark hover:bg-[#0038AE]/10 dark:text-white dark:hover:bg-white/10",
  light:
    "bg-white text-[#0038AE] shadow-lg hover:-translate-y-0.5 hover:bg-[#F4F9FD]"
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#48ACD6] focus:ring-offset-2 focus:ring-offset-transparent",
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

