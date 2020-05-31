import React from 'react';

function App() {
  return(
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={()=> console.log("change")} />
    </div>
  )};

export default App;
