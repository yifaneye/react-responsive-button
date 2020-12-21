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
    </div>
  );
};

export default App;
