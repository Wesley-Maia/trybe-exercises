import React from 'react';

class Solution extends React.Component {
  // componentDidMount() {
  //   const { exerciseId } = this.props.match.params;
  //   fetch(`http:www.algumacoisa/${exerciseId}`)
  // }

  render() {
    const { match: { params: { execiseId } } } = this.props;
    return(
      <h1>{ execiseId }</h1>
    )
  }
}

export default Solution;
