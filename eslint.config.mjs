import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "plugin:storybook/recommended",
    ),
    {
        rules: {
            "no-implicit-coercion": "error",
            "no-negated-condition": "error",
            "no-else-return": "error",
            "no-shadow": "error",
            "require-atomic-updates": "error",
            "prefer-template": "error",
            "no-nested-ternary": "error",
            "no-lonely-if": "error",
            eqeqeq: "error",
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: "return" },
                {
                    blankLine: "always",
                    prev: ["const", "let", "var"],
                    next: "*",
                },
                {
                    blankLine: "any",
                    prev: ["const", "let", "var"],
                    next: ["const", "let", "var"],
                },
            ],
            "lines-between-class-members": [
                "error",
                "always",
                { exceptAfterSingleLine: true },
            ],
        },
    },
];

export default eslintConfig;
