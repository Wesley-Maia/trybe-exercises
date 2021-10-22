import React from 'react';

class HelloWorld extends React.Component {
  render() {

    const currentLearning = (subject) => {
      return (<h2>Eu estou estudando {subject}</h2>)
    }

    return (
      <div>
        <h1 className="hello-world">Hello World</h1>
        <p>Esse é o meu primeiro App React</p>
        {currentLearning('React')}
      </div>
    )
  }
}

export default HelloWorld;