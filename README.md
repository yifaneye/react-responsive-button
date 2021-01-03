# react-responsive-button

Simple React button component with ripple effect when clicked and tapped

[![NPM](https://img.shields.io/npm/v/react-responsive-button.svg)](https://www.npmjs.com/package/react-responsive-button)

## Demo

![react-responsive-button GIF demo with cursor indication](https://yifanai.s3-ap-southeast-2.amazonaws.com/button/buttons-with-cursor.gif)
(Note: the round black circle shown before the ripple is from the GIF app to indicate a click)

![react-responsive-button GIF demo without cursor indication](https://yifanai.s3-ap-southeast-2.amazonaws.com/button/buttons-no-cursor.gif)
(Note: this is the component's behavior when clicked, where the cursor set to be hidden from the GIF app)

🚀 [Try react-responsive-button on CodeSandbox](https://codesandbox.io/s/react-responsive-button-nvn2x?file=/src/App.js)

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

const App = () => {
  return (
    <div>
      <Button>Default Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button style={{ background: 'red' }}>Red Button</Button>
      <Button style={{ boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)' }}>
        Button with shadow
      </Button>
      <Button style={{ border: '1px solid red' }}>Button with border</Button>
      <Button
        href='https://www.npmjs.com/package/react-responsive-button'
        target='_blank'
      >
        npm
      </Button>
      <Button
        href='https://github.com/yifaneye/react-responsive-button'
        target='_blank'
      >
        Github
      </Button>
    </div>
  );
};

export default App;
```

## License

MIT © [Yifan Ai](https://github.com/react-responsive-button)
