var React = require('react');
var ReactDOM = require('react-dom');

var styles = {
  background: 'lightblue',
  color: 'darkred',
};

var App = React.createClass({
  getInitialState: function() {
    this.state = {
      inputText: 'Test Heading \n=====\n sub-heading\n-----\n#### Another heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break  \n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\n[I\'m an inline-style link](https://www.google.com)'
    }
    return {message: this.state.inputText}
  },
  //gets the "message" div created in Message class defined below
  appHandleSubmit: function(message) {
    this.setState({message: message});
  },
  render: function() {
    return (
      <div>
      <h1>Markdown Previewer</h1>
        <InputForm onChange={this.appHandleSubmit} 
      message={this.state.message} />
        <Message message={marked(this.state.message)}/>
      </div>
    );
  }
});

var InputForm = React.createClass({
  handleInputChange: function(e){
    this.props.onChange(e.target.value);
  },
  
  render: function() {
    return (
      <div>
        <textarea rows="25" onChange={this.handleInputChange}
        defaultValue={this.props.message} />
      </div>
    );
  }
});

var Message = React.createClass({
    render: function() {
        return (
          <div style={styles} id='right' className="message" dangerouslySetInnerHTML={{__html: this.props.message}} />
        )
    }
});


ReactDOM.render(<App />, document.getElementById('app'));