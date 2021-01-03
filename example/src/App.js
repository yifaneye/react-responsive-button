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
      <Button style={{ border: '5px solid red' }}>Button with border</Button>
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
