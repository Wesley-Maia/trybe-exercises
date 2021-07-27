import React from 'react';
import Serie from './Serie';

class SeriesList extends React.Component {
  render() {
    const { catalogData } = this.props;

    return (
      <div className="serie-list">
        {catalogData.map((serie) => <Serie key={serie.id} seriesInfo={serie} />)}
      </div>
    );
  }
}

export default SeriesList;