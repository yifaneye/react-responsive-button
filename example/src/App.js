import React from 'react';

import { Button } from 'react-responsive-button';
import 'react-responsive-button/dist/index.css';
import reactLogo from './assets/favicon.ico';

const App = () => {
  return (
    <div className='page'>
      <div className='heading-wrapper'>
        <h1>react-responsive-button</h1>
        <p>React button component with ripple effect when clicked or tapped</p>
      </div>
      <section>
        <h2>Normal Buttons (using the 'text/bordered' prop):</h2>
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
        <h2>Shaped Buttons (using the 'shape' prop):</h2>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button shape='rectangle'>Rectangular Button</Button>
          </div>
          <div className='button-wrapper'>
            <Button shape='pill'>Pill-shaped Button</Button>
          </div>
          <div className='button-wrapper'>
            <Button shape='ellipse'>Elliptical Button</Button>
          </div>
        </div>
      </section>
      <section>
        <h2>Disabled Buttons (using the 'disabled' prop):</h2>
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
        <h2>Button-liked Anchors (using the 'href' prop):</h2>
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
        <h2>Customized Buttons (using the 'style' prop):</h2>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button style={{ background: 'red' }}>Red Button</Button>
          </div>
          <div className='button-wrapper'>
            <Button style={{ border: '1px solid red' }}>
              Button with border
            </Button>
          </div>
          <div className='button-wrapper'>
            <Button style={{ boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.5)' }}>
              Button with shadow
            </Button>
          </div>
        </div>
      </section>
      <section>
        <h2>Buttons with various content (containing Emoji/image):</h2>
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
