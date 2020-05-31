import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age:"21"},
    { name: "Yusaku", age:"27"}
  ]

  return(
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
    </React.Fragment>
  )};

const User = (props) => <div>{props.name}! {props.age} years old.</div>

export default App;
