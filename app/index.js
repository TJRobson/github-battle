import React from 'react'
import ReactDom from 'react-dom'

class HelloWorld extends React.Component {

  render(){
    return ( <div>
      <h1>Hello World!</h1>
      </div>
    )
  }
}

ReactDom.render(<HelloWorld />, document.getElementById('app'))
