import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Header from './components/Header'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div
      id='app-wrapper'
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        minHeight: '100vh'
      }}
    >
      <Router>
        <div>
          <Header />
          <Navbar />
          <div
            className='container'
            style={{
              paddingTop: '5em',
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'center'
            }}
          >
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/certifications' component={Certifications} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  )
}
export default App
