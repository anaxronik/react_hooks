import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alert } from './components/Alert'
import Navbar from './components/Navbar'
import { AlertState } from './context/alert/AlertState'
import { GithubState } from './context/github/GithubState'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'

export default function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-3">
            <Alert alert={{ type: 'secondary', text: 'adsadsds' }} />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/profile/:name" component={ProfilePage} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}
