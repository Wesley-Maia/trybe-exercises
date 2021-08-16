import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  render() {
    const { solutions } = this.props;

    return(
      <section>
        <ul>
          {solutions.map(solution => (
            <li key={solution.id}>
              <Link to={ `/solutions/${solution.id}` }>{solution.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Solutions;
