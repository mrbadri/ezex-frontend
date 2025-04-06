import { BREAKPOINTS } from "@/constant/breakpoints";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

/**
 * Variants for Typography component styles.
 * ! WARNING: If you change the variant or weight, please make sure to update `RESPONSIVE_WEIGHT_MAP` and `RESPONSIVE_VARIANT_MAP` accordingly.
 */
export const typographyVariants = cva("leading-[120%]", {
    variants: {
        variant: {
            // Display
            "display/xl": "font-bold text-7xl ",
            "display/lg": "font-bold text-[2.5rem]",

            // Headings
            "heading/xxl": "font-bold text-5xl",
            "heading/xl": "font-bold text-[2.5rem]",
            "heading/lg": "font-bold text-[2rem]",
            "heading/md": "font-bold text-2xl",

            // Body
            "body/3xl/semiBold": "font-semibold text-[1.625rem]",
            "body/3xl/medium": "font-medium text-[1.625rem]",
            "body/2xl/bold": "font-bold text-2xl",
            "body/2xl": "font-normal text-2xl",
            "body/xl/bold": "font-bold text-xl",
            "body/xl": "font-normal text-xl",
            "body/lg/bold": "font-bold text-lg",
            "body/lg/medium": "font-medium text-lg",
            "body/lg": "font-normal text-lg",
            "body/base/bold": "font-bold text-base",
            "body/base/medium": "font-medium text-base",
            "body/base": "font-normal text-base",
            "body/sm/medium": "font-medium text-sm",
            "body/sm": "font-normal text-sm",
            "body/xs": "font-normal text-xs",
            "body/xxs": "font-normal text-[0.625rem]",

            // Caption
            "caption/sm/bold": "font-bold text-sm ",
            "caption/sm": "font-normal text-sm ",
            "caption/xs/bold": "font-bold text-xs",
            "caption/xs/medium": "font-medium text-xs",
            "caption/xs": "font-normal text-xs",

            // Label
            "label/lg/medium": "font-medium text-lg",
            "label/lg": "font-normal text-lg", // 18
            "label/base/medium": "font-medium text-base", //16
            "label/base": "font-normal text-base",
            "label/sm/medium": "font-medium text-xxs", // 10
            "label/sm": "font-normal text-sm",

            // Chart
            "chart/xs/semiBold": "font-semibold text-xs ",
            "chart/xs": "font-normal text-xs ",
            "chart/xxs/bold": "font-bold text-[0.625rem]",
            "chart/xxs/semiBold": "font-semibold text-[0.625rem]",

            // Legacy or fallback
            inherit: "font-inherit",
        },
        weight: {
            thin: "font-thin",
            extralight: "font-extralight",
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            extrabold: "font-extrabold",
            black: "font-black",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },
        transform: {
            lowercase: "lowercase",
            uppercase: "uppercase",
            capitalize: "capitalize",
        },
        decoration: {
            none: "no-underline",
            underline: "underline",
            lineThrough: "line-through",
            overline: "overline",
            underlineLineThrough: "line-through",
        },
        truncate: {
            true: "truncate",
            false: "",
        },
    },
});

export type TypographyVariant = NonNullable<
    VariantProps<typeof typographyVariants>["variant"]
>;

export type TypographyWeight = NonNullable<
    VariantProps<typeof typographyVariants>["weight"]
>;

/**
 * Defines supported component types for Typography.
 */
type TypographyComponent =
    | "p"
    | "span"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

/**
 * Breakpoint keys.
 */
type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Props for the Typography component.
 */
export interface TypographyProps
    extends PropsWithChildren<VariantProps<typeof typographyVariants>> {
    component?: TypographyComponent;
    className?: string;
    onClick?: () => void;
    responsiveVariant?: Partial<
        Record<Breakpoint, VariantProps<typeof typographyVariants>["variant"]>
    >;
    responsiveWeight?: Partial<
        Record<Breakpoint, VariantProps<typeof typographyVariants>["weight"]>
    >;
}

export type ResponsiveVariantKey = `${Breakpoint}:${TypographyVariant}`;

export type ResponsiveWeightKey = `${Breakpoint}:${TypographyWeight}`;

// https://github.com/tailwindlabs/tailwindcss/discussions/14462
// Tailwind v4 removed the `safelist` option. Dynamic class generation like `${prefix}${class}` won't work
// because Tailwind cannot detect those classes during build.
// This static map ensures all responsive classes are explicitly written and picked up by the JIT compiler.
// TODO: Replace this map with dynamic class generation once Tailwind reintroduces support for safelist in v4+
export const RESPONSIVE_VARIANT_MAP: Record<ResponsiveVariantKey, string> = {
    // Display
    "sm:display/xl": "sm:font-bold sm:text-7xl",
    "md:display/xl": "md:font-bold md:text-7xl",
    "lg:display/xl": "lg:font-bold lg:text-7xl",
    "xl:display/xl": "xl:font-bold xl:text-7xl",
    "sm:display/lg": "sm:font-bold sm:text-[2.5rem]",
    "md:display/lg": "md:font-bold md:text-[2.5rem]",
    "lg:display/lg": "lg:font-bold lg:text-[2.5rem]",
    "xl:display/lg": "xl:font-bold xl:text-[2.5rem]",

    // Headings
    "sm:heading/xxl": "sm:font-bold sm:text-5xl",
    "md:heading/xxl": "md:font-bold md:text-5xl",
    "lg:heading/xxl": "lg:font-bold lg:text-5xl",
    "xl:heading/xxl": "xl:font-bold xl:text-5xl",
    "sm:heading/xl": "sm:font-bold sm:text-[2.5rem]",
    "md:heading/xl": "md:font-bold md:text-[2.5rem]",
    "lg:heading/xl": "lg:font-bold lg:text-[2.5rem]",
    "xl:heading/xl": "xl:font-bold xl:text-[2.5rem]",
    "sm:heading/lg": "sm:font-bold sm:text-[2rem]",
    "md:heading/lg": "md:font-bold md:text-[2rem]",
    "lg:heading/lg": "lg:font-bold lg:text-[2rem]",
    "xl:heading/lg": "xl:font-bold xl:text-[2rem]",
    "sm:heading/md": "sm:font-bold sm:text-2xl",
    "md:heading/md": "md:font-bold md:text-2xl",
    "lg:heading/md": "lg:font-bold lg:text-2xl",
    "xl:heading/md": "xl:font-bold xl:text-2xl",

    // Body
    "sm:body/3xl/semiBold": "sm:font-semibold sm:text-[1.625rem]",
    "md:body/3xl/semiBold": "md:font-semibold md:text-[1.625rem]",
    "lg:body/3xl/semiBold": "lg:font-semibold lg:text-[1.625rem]",
    "xl:body/3xl/semiBold": "xl:font-semibold xl:text-[1.625rem]",
    "sm:body/3xl/medium": "sm:font-medium sm:text-[1.625rem]",
    "md:body/3xl/medium": "md:font-medium md:text-[1.625rem]",
    "lg:body/3xl/medium": "lg:font-medium lg:text-[1.625rem]",
    "xl:body/3xl/medium": "xl:font-medium xl:text-[1.625rem]",
    "sm:body/2xl/bold": "sm:font-bold sm:text-2xl",
    "md:body/2xl/bold": "md:font-bold md:text-2xl",
    "lg:body/2xl/bold": "lg:font-bold lg:text-2xl",
    "xl:body/2xl/bold": "xl:font-bold xl:text-2xl",
    "sm:body/2xl": "sm:font-normal sm:text-2xl",
    "md:body/2xl": "md:font-normal md:text-2xl",
    "lg:body/2xl": "lg:font-normal lg:text-2xl",
    "xl:body/2xl": "xl:font-normal xl:text-2xl",
    "sm:body/xl/bold": "sm:font-bold sm:text-xl",
    "md:body/xl/bold": "md:font-bold md:text-xl",
    "lg:body/xl/bold": "lg:font-bold lg:text-xl",
    "xl:body/xl/bold": "xl:font-bold xl:text-xl",
    "sm:body/xl": "sm:font-normal sm:text-xl",
    "md:body/xl": "md:font-normal md:text-xl",
    "lg:body/xl": "lg:font-normal lg:text-xl",
    "xl:body/xl": "xl:font-normal xl:text-xl",
    "sm:body/lg/bold": "sm:font-bold sm:text-lg",
    "md:body/lg/bold": "md:font-bold md:text-lg",
    "lg:body/lg/bold": "lg:font-bold lg:text-lg",
    "xl:body/lg/bold": "xl:font-bold xl:text-lg",
    "sm:body/lg/medium": "sm:font-medium sm:text-lg",
    "md:body/lg/medium": "md:font-medium md:text-lg",
    "lg:body/lg/medium": "lg:font-medium lg:text-lg",
    "xl:body/lg/medium": "xl:font-medium xl:text-lg",
    "sm:body/lg": "sm:font-normal sm:text-lg",
    "md:body/lg": "md:font-normal md:text-lg",
    "lg:body/lg": "lg:font-normal lg:text-lg",
    "xl:body/lg": "xl:font-normal xl:text-lg",
    "sm:body/base/bold": "sm:font-bold sm:text-base",
    "md:body/base/bold": "md:font-bold md:text-base",
    "lg:body/base/bold": "lg:font-bold lg:text-base",
    "xl:body/base/bold": "xl:font-bold xl:text-base",
    "sm:body/base/medium": "sm:font-medium sm:text-base",
    "md:body/base/medium": "md:font-medium md:text-base",
    "lg:body/base/medium": "lg:font-medium lg:text-base",
    "xl:body/base/medium": "xl:font-medium xl:text-base",
    "sm:body/base": "sm:font-normal sm:text-base",
    "md:body/base": "md:font-normal md:text-base",
    "lg:body/base": "lg:font-normal lg:text-base",
    "xl:body/base": "xl:font-normal xl:text-base",
    "sm:body/sm/medium": "sm:font-medium sm:text-sm",
    "md:body/sm/medium": "md:font-medium md:text-sm",
    "lg:body/sm/medium": "lg:font-medium lg:text-sm",
    "xl:body/sm/medium": "xl:font-medium xl:text-sm",
    "sm:body/sm": "sm:font-normal sm:text-sm",
    "md:body/sm": "md:font-normal md:text-sm",
    "lg:body/sm": "lg:font-normal lg:text-sm",
    "xl:body/sm": "xl:font-normal xl:text-sm",
    "sm:body/xs": "sm:font-normal sm:text-xs",
    "md:body/xs": "md:font-normal md:text-xs",
    "lg:body/xs": "lg:font-normal lg:text-xs",
    "xl:body/xs": "xl:font-normal xl:text-xs",
    "sm:body/xxs": "sm:font-normal sm:text-[0.625rem]",
    "md:body/xxs": "md:font-normal md:text-[0.625rem]",
    "lg:body/xxs": "lg:font-normal lg:text-[0.625rem]",
    "xl:body/xxs": "xl:font-normal xl:text-[0.625rem]",

    // Caption
    "sm:caption/sm/bold": "sm:font-bold sm:text-sm ",
    "md:caption/sm/bold": "md:font-bold md:text-sm ",
    "lg:caption/sm/bold": "lg:font-bold lg:text-sm ",
    "xl:caption/sm/bold": "xl:font-bold xl:text-sm ",
    "sm:caption/sm": "sm:font-normal sm:text-sm ",
    "md:caption/sm": "md:font-normal md:text-sm ",
    "lg:caption/sm": "lg:font-normal lg:text-sm ",
    "xl:caption/sm": "xl:font-normal xl:text-sm ",
    "sm:caption/xs/bold": "sm:font-bold sm:text-xs",
    "md:caption/xs/bold": "md:font-bold md:text-xs",
    "lg:caption/xs/bold": "lg:font-bold lg:text-xs",
    "xl:caption/xs/bold": "xl:font-bold xl:text-xs",
    "sm:caption/xs/medium": "sm:font-medium sm:text-xs",
    "md:caption/xs/medium": "md:font-medium md:text-xs",
    "lg:caption/xs/medium": "lg:font-medium lg:text-xs",
    "xl:caption/xs/medium": "xl:font-medium xl:text-xs",
    "sm:caption/xs": "sm:font-normal sm:text-xs",
    "md:caption/xs": "md:font-normal md:text-xs",
    "lg:caption/xs": "lg:font-normal lg:text-xs",
    "xl:caption/xs": "xl:font-normal xl:text-xs",

    // Label
    "sm:label/lg/medium": "sm:font-medium sm:text-lg",
    "md:label/lg/medium": "md:font-medium md:text-lg",
    "lg:label/lg/medium": "lg:font-medium lg:text-lg",
    "xl:label/lg/medium": "xl:font-medium xl:text-lg",
    "sm:label/lg": "sm:font-normal sm:text-lg",
    "md:label/lg": "md:font-normal md:text-lg",
    "lg:label/lg": "lg:font-normal lg:text-lg",
    "xl:label/lg": "xl:font-normal xl:text-lg",
    "sm:label/base/medium": "sm:font-medium sm:text-base",
    "md:label/base/medium": "md:font-medium md:text-base",
    "lg:label/base/medium": "lg:font-medium lg:text-base",
    "xl:label/base/medium": "xl:font-medium xl:text-base",
    "sm:label/base": "sm:font-normal sm:text-base",
    "md:label/base": "md:font-normal md:text-base",
    "lg:label/base": "lg:font-normal lg:text-base",
    "xl:label/base": "xl:font-normal xl:text-base",
    "sm:label/sm/medium": "sm:font-medium sm:text-sm",
    "md:label/sm/medium": "md:font-medium md:text-sm",
    "lg:label/sm/medium": "lg:font-medium lg:text-sm",
    "xl:label/sm/medium": "xl:font-medium xl:text-sm",
    "sm:label/sm": "sm:font-normal sm:text-sm",
    "md:label/sm": "md:font-normal md:text-sm",
    "lg:label/sm": "lg:font-normal lg:text-sm",
    "xl:label/sm": "xl:font-normal xl:text-sm",

    // Chart
    "sm:chart/xs/semiBold": "sm:font-semibold sm:text-xs ",
    "md:chart/xs/semiBold": "md:font-semibold md:text-xs ",
    "lg:chart/xs/semiBold": "lg:font-semibold lg:text-xs ",
    "xl:chart/xs/semiBold": "xl:font-semibold xl:text-xs ",
    "sm:chart/xs": "sm:font-normal sm:text-xs ",
    "md:chart/xs": "md:font-normal md:text-xs ",
    "lg:chart/xs": "lg:font-normal lg:text-xs ",
    "xl:chart/xs": "xl:font-normal xl:text-xs ",
    "sm:chart/xxs/bold": "sm:font-bold sm:text-[0.625rem]",
    "md:chart/xxs/bold": "md:font-bold md:text-[0.625rem]",
    "lg:chart/xxs/bold": "lg:font-bold lg:text-[0.625rem]",
    "xl:chart/xxs/bold": "xl:font-bold xl:text-[0.625rem]",
    "sm:chart/xxs/semiBold": "sm:font-semibold sm:text-[0.625rem]",
    "md:chart/xxs/semiBold": "md:font-semibold md:text-[0.625rem]",
    "lg:chart/xxs/semiBold": "lg:font-semibold lg:text-[0.625rem]",
    "xl:chart/xxs/semiBold": "xl:font-semibold xl:text-[0.625rem]",

    // inherit
    "sm:inherit": "sm:font-inherit",
    "md:inherit": "md:font-inherit",
    "lg:inherit": "lg:font-inherit",
    "xl:inherit": "xl:font-inherit",
};

export const RESPONSIVE_WEIGHT_MAP: Record<ResponsiveWeightKey, string> = {
    "sm:thin": "sm:font-thin",
    "md:thin": "md:font-thin",
    "lg:thin": "lg:font-thin",
    "xl:thin": "xl:font-thin",

    "sm:extralight": "sm:font-extralight",
    "md:extralight": "md:font-extralight",
    "lg:extralight": "lg:font-extralight",
    "xl:extralight": "xl:font-extralight",

    "sm:light": "sm:font-light",
    "md:light": "md:font-light",
    "lg:light": "lg:font-light",
    "xl:light": "xl:font-light",

    "sm:normal": "sm:font-normal",
    "md:normal": "md:font-normal",
    "lg:normal": "lg:font-normal",
    "xl:normal": "xl:font-normal",
    "sm:medium": "sm:font-medium",
    "md:medium": "md:font-medium",
    "lg:medium": "lg:font-medium",
    "xl:medium": "xl:font-medium",

    "sm:semibold": "sm:font-semibold",
    "md:semibold": "md:font-semibold",
    "lg:semibold": "lg:font-semibold",
    "xl:semibold": "xl:font-semibold",

    "sm:bold": "sm:font-bold",
    "md:bold": "md:font-bold",
    "lg:bold": "lg:font-bold",
    "xl:bold": "xl:font-bold",

    "sm:extrabold": "sm:font-extrabold",
    "md:extrabold": "md:font-extrabold",
    "lg:extrabold": "lg:font-extrabold",
    "xl:extrabold": "xl:font-extrabold",

    "sm:black": "sm:font-black",
    "md:black": "md:font-black",
    "lg:black": "lg:font-black",
    "xl:black": "xl:font-black",
};

const getResponsiveVariantClasses = (
    responsive: TypographyProps["responsiveVariant"],
): string => {
    if (!responsive) return "";

    return Object.entries(responsive)
        .map(([bp, variant]) => {
            if (!variant) return "";
            const key: ResponsiveVariantKey = `${bp as Breakpoint}:${variant}`;
            return RESPONSIVE_VARIANT_MAP[key] || "";
        })
        .join(" ");
};

const getResponsiveWeightClasses = (
    responsive: TypographyProps["responsiveWeight"],
): string => {
    if (!responsive) return "";

    return Object.entries(responsive)
        .map(([bp, variant]) => {
            if (!variant) return "";
            const key: ResponsiveWeightKey = `${bp as Breakpoint}:${variant}`;
            return RESPONSIVE_WEIGHT_MAP[key] || "";
        })
        .join(" ");
};

/**
 * Typography is a flexible, responsive text component with support for
 * custom HTML tags, text variants, font weights, alignment, transformations,
 * decorations, truncation, and responsive styles.
 *
 * Props:
 * - `component` (optional): The HTML tag to render (e.g., `"p"`, `"span"`, `"h1"`, etc). Default is `"p"`.
 * - `variant` (optional): Applies a predefined text style such as `"body/lg"`, `"heading/xl"`, or `"display/lg"`.
 * - `weight` (optional): Font weight like `"normal"`, `"bold"`, `"medium"`, etc.
 * - `align` (optional): Text alignment (`"left"`, `"center"`, `"right"`, or `"justify"`).
 * - `transform` (optional): Text transformation (`"uppercase"`, `"lowercase"`, `"capitalize"`).
 * - `decoration` (optional): Text decoration (`"none"`, `"underline"`, `"lineThrough"`, `"overline"`, `"underlineLineThrough"`).
 * - `truncate` (optional): If `true`, truncates text with an ellipsis.
 * - `className` (optional): Custom Tailwind or utility classes to append.
 * - `onClick` (optional): Click handler for the element.
 * - `responsiveVariant` (optional): Responsive variant overrides per breakpoint, e.g. `{ sm: "body/sm", lg: "heading/lg" }`.
 * - `responsiveWeight` (optional): Responsive weight overrides per breakpoint, e.g. `{ sm: "normal", xl: "bold" }`.
 * - `children`: Content to render inside the typography component.
 *
 * @example
 * `<Typography variant="body/lg" weight="medium">
 *      Hello World
 * </Typography>`
 *
 * @example
 * `<Typography
 *   component="h2"
 *   responsiveVariant={{ sm: "heading/md", lg: "heading/lg" }}>
 *      Responsive Heading
 * </Typography>`
 */
export const Typography: React.FC<TypographyProps> = ({
    component: Component = "p",
    variant,
    responsiveVariant,
    weight,
    responsiveWeight,
    align,
    transform,
    decoration,
    truncate,
    className,
    children,
    ...restProps
}) => {
    return (
        <Component
            className={cn(
                typographyVariants({
                    variant,
                    weight,
                    align,
                    transform,
                    decoration,
                    truncate,
                }),
                getResponsiveVariantClasses(responsiveVariant),
                getResponsiveWeightClasses(responsiveWeight),
                className,
            )}
            {...restProps}
        >
            {children}
        </Component>
    );
};
