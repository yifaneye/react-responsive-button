# react-responsive-button

Simple, lightweight, dependency-free React button component with ripple effect when clicked and tapped

[![NPM](https://img.shields.io/npm/v/react-responsive-button.svg)](https://www.npmjs.com/package/react-responsive-button)

## Demo

![react-responsive-button default, styled and customized buttons](https://yifanai.s3-ap-southeast-2.amazonaws.com/button/rrb.jpg) \
Try react-responsive-button 🚀 on [CodeSandbox](https://codesandbox.io/s/react-responsive-button-nvn2x?file=/src/App.js)

![react-responsive-button GIF demo with cursor indication](https://yifanai.s3-ap-southeast-2.amazonaws.com/button/buttons-with-cursor.gif) \
Note: the round black circle shown before the ripple is from GIPHY CAPTURE (the GIF app) to indicate a click.

![react-responsive-button GIF demo without cursor indication](https://yifanai.s3-ap-southeast-2.amazonaws.com/button/buttons-no-cursor.gif) \
Note: this is the component's behaviour when clicked, where the cursor is set to be hidden from GIPHY CAPTURE (the GIF app).

Try react-responsive-button 🚀 on [CodeSandbox](https://codesandbox.io/s/react-responsive-button-nvn2x?file=/src/App.js)

## Install

```bash
npm install --save react-responsive-button
```
OR
```bash
yarn add react-responsive-button
```

## Usage

```jsx
import React from 'react';

import { Button } from 'react-responsive-button';
import 'react-responsive-button/dist/index.css';
import reactLogo from './assets/favicon.ico';

const App = () => {
  return (
    <div>
      <Button>Default Button</Button>
      <Button text>Text Button</Button>
      <Button bordered>Bordered Button</Button>
      <Button shape='rectangle'>Rectangular Button</Button>
      <Button shape='pill'>Pill-shaped Button</Button>
      <Button shape='ellipse'>Elliptical Button</Button>
      <Button disabled>Default Button (disabled)</Button>
      <Button href='#hi'>Button-liked Anchor</Button>
      <Button href='https://www.npmjs.com/package/react-responsive-button'>
        Button-liked Anchor
      </Button>
      <Button
        href='https://www.npmjs.com/package/react-responsive-button'
        target='_blank'
      >
        Button-liked Anchor
      </Button>
      <Button style={{ background: 'red' }}>Red Button</Button>
      <Button style={{ boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)' }}>
        Button with shadow
      </Button>
      <Button style={{ border: '5px solid red' }}>Button with border</Button>
      <Button>
        <span role='img' aria-label='Heart'>
          ❤️
        </span>
      </Button>
      <Button>
        <img src={reactLogo} alt='React' />
      </Button>
    </div>
  );
};

export default App;
```

Try react-responsive-button 🚀 on [CodeSandbox](https://codesandbox.io/s/react-responsive-button-nvn2x?file=/src/App.js)

## Props

To customize the default button with black background, white text, no border and rounded corners (with border-radius of 0.5rem), use the following props:

|Name             |Type                  |Default|Description|
|:----------------|:---------------------|:------|:----------|
|text             |Boolean               |false  |If true, the button will have white background and black text.|
|bordered         |Boolean               |false  |If true, the button will have white background, black text and 1px solid black border.|
|disabled         |Boolean               |false  |If true, the button will have faded background and faded text, and will not allowed to be clicked.|
|shape            |String                |null   |Shape of the button that is any of 'rectangle' or 'pill' or 'ellipse'.|
|href             |String                |null   |If specified, the button will be an anchor element, whilst still look like a button.|
|style            |Object                |null   |Inline style(s) to be placed on the button element.|
|children         |node or Array of nodes|null   |DOM node(s) inside the button.|
|(any other props)|Any                   |null   |Any number of additional attribute(s) to be placed on the button element, e.g. target='_blank', aria-label='Open Modal'.|

## License

MIT © [Yifan Ai](https://github.com/yifaneye/react-responsive-button)
