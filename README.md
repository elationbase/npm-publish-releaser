# @elationbase/design-system

The design system is a collection of React components that can be used to build applications. The components are designed to be used in a consistent way to create a cohesive user experience.

## Develop

```bash
npm install
npm run build:icons
npm run start
```

### Other Scripts

| Script | Description |
| ------ | ----------- |
| `npm run build` | Build the components for production |
| `npm run build:storybook` | Build the storybook for production |
| `npm run test` | Run the test suite |
| `npm run lint` | Run the linter |

## Installation in Application

To install the design system.

```bash
npm install @elationbase/design-system
pnpm install @elationbase/design-system
bun install @elationbase/design-system
```

## Setup theme

Theme can be `elationbase-dark` `elationbase-light`

```html
<body data-theme="elationbase-dark">
....
</body>
```

## Usage

To use the design system, you can import the components you need from the package.

 ```tsx
import { Action } from '@elationbase/design-system';
import '@elationbase/design-system/styles.css';

function App() {
  return (
    <Action>Click me</Action>
  );
}
```
