import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import LiveLectures from '../pages/LiveLectures';
import Solution from '../pages/Solution';

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      solutions: [
        {
          id: 'hello-world-no-react',
          name: '11.1 Hello World no React'
        },
        {
          id: 'components-react',
          name: '11.2 Components React'
        },
      ]
    }
  }

  render() {
    const { solutions } = this.state;
    return (
      <main className="Content">
        <Switch>
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route 
            exact
            path="/solutions" 
            render={ (reactRouterProps) => <Solutions {...reactRouterProps} solutions={ solutions }/> } 
          />
          <Route path="/solutions/:execiseId" component={ Solution } />
        </Switch>
      </main>
    );
  }
}

export default Content;
