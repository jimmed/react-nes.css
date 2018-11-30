# react-nes.css

> A React UI library, based on [NES.css][nes]

[![NPM](https://img.shields.io/npm/v/react-nes.css.svg)][npm]

## Install

### 1. Install dependencies using npm or yarn

```bash
npm install --save react-nes.css nes.css
```

or

```bash
yarn add react-nes.css nes.css
```

### 2. Include NES.css's stylesheet in your project

This module does not bundle [NES.css][nes], so you will need to include it in your application yourself.

- If you are bundling your application using a tool such as [Webpack][webpack], (or you've set up your project using [create-react-app][cra]), then you should be able to add:

  ```js
  import "nes.css/min/nes.css";
  ```

- Otherwise, follow the instructions suggested by [NES's README file][nes].

## Usage

All components are exported as named exports from this module.

- Import a component using ES module syntax:

  ```js
  import { Button } from "react-nes.css";
  ```

- _Or,_ import it using CommonJS syntax:

  ```js
  const { Button } = require("react-nes.css");
  ```

## Components

See all of the components in action on the [demo page][demo].

- Balloon
- Button
- Checkbox
- Container
- Controller
- Icon
- Octocat
- Radio
- TextInput

[nes]: https://www.npmjs.com/package/nes.css
[cra]: https://www.npmjs.com/package/create-react-app
[webpack]: https://www.npmjs.com/package/webpack
[demo]: https://jimmed.github.io/react-nes.css
[npm]: https://www.npmjs.com/package/react-nes.css
