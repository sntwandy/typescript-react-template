import * as React from 'react';

// Styles
import '../assets/styles/components/Hello.scss';

const Hello = (): JSX.Element => {
  return(
    <div className="hello-container">
      <h1>Hello World with TypeScript!</h1>
    </div>
  );
};

export default Hello;