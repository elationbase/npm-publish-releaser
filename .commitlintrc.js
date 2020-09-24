const Config = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  rules: {
    "scope-empty": [2, "never"],
    "header-max-length": [2, "always", 100],
  },
  defaultIgnores: true,
  parserOpts: {
    headerCorrespondence: ["type", "scope", "subject"],
  },
};

module.exports = Config;
