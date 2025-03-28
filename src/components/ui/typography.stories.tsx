// Typography.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import {
    Typography,
    TypographyProps,
    TypographyVariant,
    typographyVariants,
    TypographyWeight,
} from "./typography";
import Link from "next/link";

// List of all variants and weights from your component
const VARIANT_OPTIONS: TypographyVariant[] = [
    "display/xl",
    "display/lg",
    "heading/xxl",
    "heading/xl",
    "heading/lg",
    "heading/md",
    "body/3xl/semiBold",
    "body/3xl/medium",
    "body/2xl/bold",
    "body/2xl",
    "body/xl/bold",
    "body/xl",
    "body/lg/bold",
    "body/lg/medium",
    "body/lg",
    "body/base/bold",
    "body/base/medium",
    "body/base",
    "body/sm/medium",
    "body/sm",
    "body/xs",
    "body/xxs",
    "caption/sm/bold",
    "caption/sm",
    "caption/xs/bold",
    "caption/xs/medium",
    "caption/xs",
    "label/lg/medium",
    "label/lg",
    "label/base/medium",
    "label/base",
    "label/sm/medium",
    "label/sm",
    "chart/xs/semiBold",
    "chart/xs",
    "chart/xxs/bold",
    "chart/xxs/semiBold",
    "inherit",
];

const WEIGHT_OPTIONS: TypographyWeight[] = [
    "thin",
    "extralight",
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
];

const BODY_VARIANTS = [
    "body/3xl/semiBold",
    "body/3xl/medium",
    "body/2xl/bold",
    "body/2xl",
    "body/xl/bold",
    "body/xl",
    "body/lg/bold",
    "body/lg/medium",
    "body/lg",
    "body/base/bold",
    "body/base/medium",
    "body/base",
    "body/sm/medium",
    "body/sm",
    "body/xs",
    "body/xxs",
];

const CAPTION_VARIANTS = [
    "caption/sm/bold",
    "caption/sm",
    "caption/xs/bold",
    "caption/xs/medium",
    "caption/xs",
];

const LABEL_VARIANTS = [
    "label/lg/medium",
    "label/lg",
    "label/base/medium",
    "label/base",
    "label/sm/medium",
    "label/sm",
];

const CHART_VARIANTS = [
    "chart/xs/semiBold",
    "chart/xs",
    "chart/xxs/bold",
    "chart/xxs/semiBold",
];

// Default export with meta configuration
const meta = {
    title: "Components/Typography",
    component: Typography,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        component: {
            control: { type: "select" },
            options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
            description:
                'The HTML tag to render (e.g., "p", "span", "h1", etc). Default is "p".',
        },
        variant: {
            table: {
                defaultValue: { summary: "body/base" },
                type: { summary: "string" },
            },
            control: { type: "select" },
            options: VARIANT_OPTIONS,
            description:
                'Applies a predefined text style such as "body/lg", "heading/xl", or "display/lg".',
        },
        weight: {
            control: { type: "select" },
            options: WEIGHT_OPTIONS,
            description: 'Font weight like "normal", "bold", "medium", etc.',
        },
        align: {
            control: { type: "select" },
            options: ["left", "center", "right", "justify"],
            description:
                'Text alignment ("left", "center", "right", or "justify").',
        },
        transform: {
            control: { type: "select" },
            options: ["uppercase", "lowercase", "capitalize"],
            description:
                'Text transformation ("uppercase", "lowercase", or "capitalize").',
        },
        decoration: {
            control: { type: "select" },
            options: [
                "none",
                "underline",
                "lineThrough",
                "overline",
                "underlineLineThrough",
            ],
            description:
                'Text decoration ("none", "underline", "lineThrough", "overline", "underlineLineThrough").',
        },
        truncate: {
            control: "boolean",
            description: "If true, truncates text with an ellipsis.",
        },
        className: {
            control: "text",
            description: "Custom Tailwind or utility classes to append.",
        },

        responsiveVariant: {
            control: "object",
            description:
                'Responsive variant overrides per breakpoint, e.g. { sm: "body/sm", lg: "heading/lg" }.',
        },
        responsiveWeight: {
            control: "object",
            description:
                'Responsive weight overrides per breakpoint, e.g. { sm: "normal", xl: "bold" }.',
        },
        children: {
            control: "text",
            description: "Content to render inside the typography component.",
        },
    },
    args: {
        children: "Sample typography text",
    },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const Default: Story = {};

// Display Variants
export const DisplayVariants: Story = {
    parameters: {
        layout: "padded",
    },
    render: args => (
        <div className="space-y-4">
            <Typography {...args} variant="display/xl">
                display/xl
            </Typography>
            <Typography {...args} variant="display/lg">
                display/lg
            </Typography>
        </div>
    ),
};

// Heading Variants
export const HeadingVariants: Story = {
    parameters: {
        layout: "padded",
    },
    render: args => (
        <div className="space-y-4">
            <Typography {...args} variant="heading/xxl">
                heading/xxl
            </Typography>
            <Typography {...args} variant="heading/xl">
                heading/xl
            </Typography>
            <Typography {...args} variant="heading/lg">
                heading/lg
            </Typography>
            <Typography {...args} variant="heading/md">
                heading/md
            </Typography>
        </div>
    ),
};

// Body Variants
export const BodyVariants: Story = {
    parameters: {
        layout: "padded",
    },
    render: args => (
        <div className="space-y-4">
            {BODY_VARIANTS.map(variant => (
                <Typography
                    key={variant}
                    {...args}
                    variant={variant as TypographyProps["variant"]}
                >
                    {variant}
                </Typography>
            ))}
        </div>
    ),
};

// caption variant
export const CaptionVariant: Story = {
    parameters: {
        layout: "padded",
    },
    render: args => (
        <div className="space-y-4">
            {CAPTION_VARIANTS.map(variant => (
                <Typography
                    key={variant}
                    {...args}
                    variant={variant as TypographyProps["variant"]}
                >
                    {variant}
                </Typography>
            ))}
        </div>
    ),
};

// Lable Variant
export const LabelVariant: Story = {
    parameters: {
        layout: "padded",
    },
    render: args => (
        <div className="space-y-4">
            {LABEL_VARIANTS.map(variant => (
                <Typography
                    key={variant}
                    {...args}
                    variant={variant as TypographyProps["variant"]}
                >
                    {variant}
                </Typography>
            ))}
        </div>
    ),
};

// Chart Variant
export const ChartVariant: Story = {
    parameters: {
        layout: "padded",
    },
    render: args => (
        <div className="space-y-4">
            {CHART_VARIANTS.map(variant => (
                <Typography
                    key={variant}
                    {...args}
                    variant={variant as TypographyProps["variant"]}
                >
                    {variant}
                </Typography>
            ))}
        </div>
    ),
};

// With Alignment and Transformation
export const Transformed: Story = {
    args: {
        variant: "body/base",
        transform: "uppercase",
        children: "Centered Uppercase Text",
    },
};

// Showcase responsive typography
export const Responsive: Story = {
    args: {
        variant: "body/base",
        responsiveVariant: {
            sm: "body/base",
            md: "heading/md",
            lg: "display/lg",
            xl: "display/xl",
        },
        responsiveWeight: {
            sm: "black",
            md: "bold",
            lg: "medium",
            xl: "thin",
        },
        children: "Responsive typography based on breakpoints",
    },
};

// Truncate
export const Truncate: StoryObj = {
    args: {
        truncate: true,
        variant: "body/base",
        children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed",
    },
    render: args => (
        <div className="max-w-3xs">
            <Typography {...args} />
        </div>
    ),
};

// Alignment
export const Alignment: StoryObj = {
    args: {
        align: "right",
        variant: "body/base",
        children: "Lorem ipsum dolor sit amet",
    },
    render: args => (
        <div className="min-w-2xl">
            <Typography {...args} />
        </div>
    ),
};

// decoration
export const Decoration: StoryObj = {
    args: {
        decoration: "lineThrough",
        variant: "heading/lg",
        children: "Lorem ipsum dolor sit amet",
    },
};

export const TypographyStyle: StoryObj = {
    args: {
        style: "h1",
        variant: "heading/lg",
    },
    parameters: {
        docs: {
            description: {
                story: `You can use \`className={typographyVariants(args)}\` to apply typography styles in your components.`,
            },
            source: {
                code: `<div className="min-w-2xl">
  <Link href="#" className={typographyVariants(args)}>
    Link styled with Next.js typography
  </Link>
</div>`,
            },
        },
    },
    render: args => (
        <Link href="#" className={typographyVariants(args)}>
            Link styled with Next.js typography
        </Link>
    ),
};
