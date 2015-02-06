'use strict';

var React = require('react');
var Tile  = require('./tile');

var App = React.createClass({
  propTypes: {},
  mixins:    [],

  getInitialState: function() { return {}; },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  render: function() {
    return (
      <div id='board'>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    );
  }
});

module.exports = App;
