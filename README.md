<div align="center">
<a href="https://loungeunderwear.com"><img width="1200" src="https://cdn.shopify.com/s/files/1/0929/1494/files/lounge-header.jpg?v=1657202657"/></a>
</div>

# Lounge - React code test

> Lounge's React Design System - Create a component.

## Directory Structure

```sh
react-code-test/
├── .storybook                  # Storybook config
├── .vscode                     # Editor config
├── .yarn                       # Yarn cache and releases
├── src                         # Base - (write your code here)
└── ...                         # ...
```

## Task

### Get Started

#### Install dependencies and start workspace

```sh
yarn && yarn start
```

### Set up your CSS files

- Set up your `Button.styles.css` file for styles.
- Use Tailwind to generate utility classes for your components.

### Create a button component

From the following Figma designs, create a button component using Storybook, React, Tailwind & Jest
https://www.figma.com/file/6IsaMLS5RdQhI8DnC9H94J/Tech-Test-System

- The button styles should be defined using Tailwind CSS
- Use Tailwind component classes to create .button classes for the different variants following BEM methodology.
- The button should have a loading state.
- The button should have the ability to add an icon.
- The button should have the ability to be disabled.

### Set up testing with Jest

**Create three tests for the Button component.**

- One test should be to test the button in a disabled state, to ensure it doesn't run any action.
- The second test should be to check the loading state of the button.
- Come up with a third test for the button, which you feel would be useful.

### Showcase your button in Storybook

- Create a `Button.stories.tsx` file
- Showcase several use cases for your button component
