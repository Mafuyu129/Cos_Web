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
    "bg-[#0038AE] text-white hover:bg-[#002880] dark:bg-[#48ACD6] dark:text-[#030816] dark:hover:bg-white",
  secondary:
    "border border-[#071126]/20 bg-white text-[#071126] hover:border-[#0038AE] hover:text-[#0038AE] dark:border-white/25 dark:bg-white/[0.03] dark:text-white dark:hover:border-[#48ACD6] dark:hover:text-[#48ACD6]",
  ghost:
    "text-[#071126] hover:bg-[#0038AE]/10 dark:text-white dark:hover:bg-white/10",
  light:
    "bg-white text-[#030816] hover:bg-[#48ACD6] hover:text-[#030816]"
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#48ACD6]",
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


