module.exports = {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: true,
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    jsxSingleQuote: false,
    plugins: ["prettier-plugin-tailwindcss"],
    printWidth: 80,
    proseWrap: "always",
    quoteProps: "as-needed",
    requirePragma: false,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    useTabs: false,
    editorconfig: true,
    overrides: [
        {
            files: ["*.yml", "*.yaml", "*.json"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
