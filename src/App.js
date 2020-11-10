import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route} from 'react-router-dom'
import Layout from './hoc/layout/layout'
import home from './components/pages/home/home'
import about from './components/pages/about/about'
import work from './components/pages/work/work'
import contact from './components/pages/contact/contact'

function App() {
  return (
    <div>
    <Layout>
       <Switch>
       <Route path="/about" exact component={about}/>
       <Route path="/work" exact component={work}/>
       <Route path="/contact" exact component={contact}/>
       <Route path="/"   exact component={home}/>
       </Switch>
    </Layout>
    </div>
  );
}

export default App;
