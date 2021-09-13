import React from 'react';
import { connect } from 'react-redux'
import { actionSelectMovie } from '../actions';
class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { categories, handleSelectMovie } = this.props

    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}
                      <button type="button" onClick={() => handleSelectMovie(movie,category)}>
                        Select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
};

//1º LER 
//RECEBE O STORE COMO PARAM
//RETORNAR UM OBJETO
const mapStateToProps = (state) => {
  return ({
    categories:state.movie.categories
  })
}

//2ºESCREVER
//RECEBE O DISPATCH COMO PARAM
//RETORNA UM OBJETO
const mapDispatchToProps = (dispatch) => {
  return ({
    handleSelectMovie: (movie,category) => dispatch(actionSelectMovie(movie,category)),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
