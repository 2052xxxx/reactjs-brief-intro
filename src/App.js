import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import { MyComponent, AnotherComponent } from './components/Components';


function App() {
  const message = <h2>Je le sens c'est lui l'homme de ma vie</h2>
  
  const [likes, setLikes] = useState(0);

  const getLikes = () => {
    return likes + 1
  }

  return (
    <>
      <h1>Hello World</h1>
      <HelloWorld />
      <MyComponent />
      <AnotherComponent />
      {message}

      <button onClick={
        () => setLikes(getLikes)
      }>{likes}</button>

    </>
  );
}

export default App;