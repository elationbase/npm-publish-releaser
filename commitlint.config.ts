export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#'],
    },
  },
  rules: {
    'header-max-length': [2, 'always', 120],
    'references-empty': [2, 'never'],
    'scope-case': [2, 'always', ['start-case']],
    'subject-case': [2, 'always', ['sentence-case']],
    'type-empty': [2, 'never'],
  },
  parserOpts: {
    headerCorrespondence: ['type', 'scope', 'subject', 'issues'],
  },
};
