import React from 'react';

import { Button } from 'react-responsive-button';
import 'react-responsive-button/dist/index.css';
import reactLogo from './assets/favicon.ico';

const App = () => {
  return (
    <div className='page'>
      <h1>react-responsive-button</h1>
      <p>
        Simple, lightweight, dependency-free React button component with ripple
        effect when clicked and tapped
      </p>
      <section>
        <small>Normal Buttons (using the 'text/bordered' prop):</small>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button>Default Button</Button>
          </div>
          <div className='button-wrapper'>
            <Button text>Text Button</Button>
          </div>
          <div className='button-wrapper'>
            <Button bordered>Bordered Button</Button>
          </div>
        </div>
      </section>
      <section>
        <small>Disabled Buttons (using the 'disabled' prop):</small>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button disabled>Default Button (disabled)</Button>
          </div>
          <div className='button-wrapper'>
            <Button text disabled>
              Text Button (disabled)
            </Button>
          </div>
          <div className='button-wrapper'>
            <Button bordered disabled>
              Bordered Button (disabled)
            </Button>
          </div>
        </div>
      </section>
      <section>
        <small>Button-liked Anchors (using the 'href' prop):</small>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button href='#hi'>#hi</Button>
          </div>
          <div className='button-wrapper'>
            <Button
              href='https://www.npmjs.com/package/react-responsive-button'
              target='_blank'
            >
              npm
            </Button>
          </div>
          <div className='button-wrapper'>
            <Button
              href='https://github.com/yifaneye/react-responsive-button'
              target='_blank'
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>
      <section>
        <small>Customized Buttons (using the 'style' prop):</small>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button style={{ background: 'red' }}>Red Button</Button>
          </div>
          <div className='button-wrapper'>
            <Button style={{ boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)' }}>
              Button with shadow
            </Button>
          </div>
          <div className='button-wrapper'>
            <Button style={{ border: '5px solid red' }}>
              Button with border
            </Button>
          </div>
        </div>
      </section>
      <section>
        <small>Special Buttons (containing Emoji/image):</small>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button>
              <span role='img' aria-label='Heart'>
                ❤️
              </span>
            </Button>
          </div>
          <div className='button-wrapper'>
            <Button>
              <img src={reactLogo} alt='React' />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
