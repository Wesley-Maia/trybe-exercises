import React from 'react';
import { connect } from 'react-redux'
class Player extends React.Component {
  render() {
    const { selectedCategory, selectedMovie } = this.props;
    return (
      <div>
        <h1>
          {selectedMovie.title}
        </h1>
        <h3>
          {selectedCategory.name}
          {' '}
          -
          {' '}
          {selectedMovie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ selectedMovie.link }
          />  
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.movie.selectedMovie,
    selectedCategory: state.movie.selectedCategory
  }
}

export default connect(mapStateToProps)(Player);