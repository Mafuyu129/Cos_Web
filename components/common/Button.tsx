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
  primary: "bg-primary text-white hover:-translate-y-0.5 hover:bg-[#0648D8]",
  secondary: "border border-primary bg-transparent text-primary hover:-translate-y-0.5 hover:bg-primary/5 dark:border-white/25 dark:text-white dark:hover:border-white",
  ghost: "text-text-dark hover:bg-primary/10 dark:text-white dark:hover:bg-white/10",
  light: "bg-white text-primary hover:-translate-y-0.5 hover:bg-text-light"
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] px-8 py-3 text-base font-semibold uppercase tracking-[0.06em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent",
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
