import React, {Component} from 'react';

class App extends Component {
  render() {
    // Use a Provider to pass the current theme to the tree below. Any component can
    // read it, no matter how deep it is. In this example, we're passing "dark" as
    // the current value.
    return (
      <div>
        <Hello/>
      </div>
    );
  }
}

class Hello extends Component {
  state = {
    error: false
  }
  render() {
    if (this.state.error) {
      throw new Error('Crrrrrr');
    }
    return <div onClick={e => this.setState({error: true})}>Hello</div>;
  }
}

export default App;
