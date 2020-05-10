var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Kale', 'Cucumber', 'Tomatoes', 'Peppers']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(name => 
      <GroceryListItem name={name}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    // for events always use bind
    this.onHover = this.onHover.bind(this);
    this.state = {
      hover: false
    };
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 800 : 400
    };
    return (
      <li style={style} onMouseEnter={this.onHover} onMouseLeave={this.onHover}>{this.props.name}</li>
    );
  }
}

ReactDOM.render(< App />, document.getElementById("app"));
