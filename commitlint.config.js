const config = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "references-empty": [0, "never"],
        "footer-max-line-length": [0, "always"],
        "body-max-line-length": [0, "always"],
    },
};

module.exports = config;
