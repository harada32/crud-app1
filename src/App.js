import React from 'react';

const App = () => {
  return(
    <React.Fragment>
      <Cat />
      <Cat />
    </React.Fragment>
  )};

const Cat = () => <div>Meow!</div>

export default App;
