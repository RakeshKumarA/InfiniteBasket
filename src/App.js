import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Scrollbar from 'react-perfect-scrollbar';
import { Theme } from './theme';
import GlobalCss from './styles/jss/GlobalCss';
import Landing6 from './home/Landing6';
import NotFound from 'home/NotFound';
import AboutPage from 'home/sections/AboutPage';
import Keyman from 'home/sections/Keyman';
import TermPlan from 'home/sections/TermPlan';
import Nri from 'home/sections/Nri';
import Retirement from 'home/sections/Retirement';
import Health from 'home/sections/Health';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar className="h-full-screen scrollable-content">
          <Router basename="/">
            <Switch>
              <Route path="/" exact component={Landing6} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/keyman" exact component={Keyman} />
              <Route path="/term" exact component={TermPlan} />
              <Route path="/nri" exact component={Nri} />
              <Route path="/retire" exact component={Retirement} />
              <Route path="/health" exact component={Health} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
