var React = require('react');
var Name = React.createClass({
  render: function() {
    return (
      <span>{this.props.name}</span>
    );
  }
});
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Name name="Masa2odaaad" />
      </div>
    );
  }
});

module.exports = HelloWorld;
