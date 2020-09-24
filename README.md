<img src="logo.png" alt="GlobaliD">

# 📦 Design Tokens

Repository for unified design tokens


### 💻 Run App Locally

```
npm install
```


### 🌈 Commiting Changes

This repo enforce `conventional commit` [More info](https://github.com/conventional-changelog/commitlint)

### Types

Must be one of the following:

**build**: Changes that affect the build system or external dependencies (example scopes: webpack, babel, npm)

**chore** Update tasks, no production code change (example scopes: build, lint, hooks)

**ci**: Changes to our CI configuration files and scripts (example scopes: Jenkins, Travis, Circle)

**docs**: Documentation only changes

**feat**: A new feature

**fix**: A bug fix

**perf**: A code change that improves performance

**refactor**: A code change that neither fixes a bug nor adds a feature

**style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

**test**: Adding missing tests or correcting existing tests

### Commit message structure

```
<type>(scope): <description>

[optional body]

[optional footer]
```

```
// Simple Example
feat(calendar): added multiyear props to component

Closes EB-1
```

```
// Extended Example
feat(calendar): added multiyear props to component

- Multiyear prop must be a number
- Two theme styles
- Unit tests and Snapshots

Closes EB-1
```