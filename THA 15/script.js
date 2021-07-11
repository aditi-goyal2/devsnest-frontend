const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    if (this.state.pressed) {
      return "Hello World";
    }

    return e(
      "button",
      { onClick: () => this.setState({ pressed: true }) }, 
      "Press this"
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(HelloWorld), domContainer);