import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }

// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world"
//     );
//   }
// }

class App extends Component {
  render(){
    return(
    <div>
      <label html For= "bar">bar</label>
      <input type= "text" onClick={() => {console.log("I am clicked")}}/ >
    </div>
    )
  }
}

export default App;
