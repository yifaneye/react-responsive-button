import React from 'react';

import { Button } from 'react-responsive-button';
import 'react-responsive-button/dist/index.css';

const App = () => {
  return (
    <>
      <Button disabled>Disabled Button</Button>
      <Button>Normal Button</Button>
    </>
  );
};

export default App;
