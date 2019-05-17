import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss'

export class App extends Component {

  state = {
    fadeActive: true,
    fadeLeftActive: true,
    fadeRightActive: true,
    fadeUpActive: true,
    fadeDownActive: true,
    fadeZoomActive: true,
    slideLeftActive: true,
    slideTopActive: true,
  }

  render() {
    return (
      <div className='container'>

        <h1>
          React CSS Animations          
        </h1>

        <div className='list'>
          <div className='list-item'>
            - Uses react transition group
          </div>
          <div className='list-item'>
            - No large external animation libraries
          </div>
          <div className='list-item'>
            - State driven
          </div>
          <div className='list-item'>
            - Customize using CSS
          </div>
        </div>
                   
        <hr/>

        <div id='animations'>

          <div id='fade'>
            <h2>Fade</h2>

            <TransitionGroup>
              {
                this.state.fadeActive &&
                <CSSTransition timeout={250} classNames='fade'>

                  <div className='box bg-1'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ fadeActive: true })}>show</button>
            <button onClick={() => this.setState({ fadeActive: false })}>hide</button>
          </div>

          <div id='fade-left'>
            <h2>Fade left</h2>

            <TransitionGroup>
              {
                this.state.fadeLeftActive &&
                <CSSTransition timeout={250} classNames='fade--left'>

                  <div className='box bg-1'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ fadeLeftActive: true })}>show</button>
            <button onClick={() => this.setState({ fadeLeftActive: false })}>hide</button>
          </div>

          <div id='fade-right'>
            <h2>Fade right</h2>

            <TransitionGroup>
              {
                this.state.fadeRightActive &&
                <CSSTransition timeout={250} classNames='fade--right'>

                  <div className='box bg-1'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ fadeRightActive: true })}>show</button>
            <button onClick={() => this.setState({ fadeRightActive: false })}>hide</button>
          </div>

          <div id='fade-up'>
            <h2>Fade up</h2>

            <TransitionGroup>
              {
                this.state.fadeUpActive &&
                <CSSTransition timeout={250} classNames='fade--up'>

                  <div className='box bg-1'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ fadeUpActive: true })}>show</button>
            <button onClick={() => this.setState({ fadeUpActive: false })}>hide</button>
          </div>

          <div id='fade-down'>
            <h2>Fade down</h2>

            <TransitionGroup>
              {
                this.state.fadeDownActive &&
                <CSSTransition timeout={250} classNames='fade--down'>

                  <div className='box bg-1'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ fadeDownActive: true })}>show</button>
            <button onClick={() => this.setState({ fadeDownActive: false })}>hide</button>
          </div>

          <div id='fade-zoom'>
            <h2>Fade scale in</h2>

            <TransitionGroup>
              {
                this.state.fadeZoomActive &&
                <CSSTransition timeout={250} classNames='fade--scale-in'>

                  <div className='box bg-2'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ fadeZoomActive: true })}>show</button>
            <button onClick={() => this.setState({ fadeZoomActive: false })}>hide</button>
          </div>
          
          <div id='slide-left'>
            <h2>Slide left</h2>

            <TransitionGroup>
              {
                this.state.slideLeftActive &&
                <CSSTransition timeout={250} classNames='slide--left'>

                  <div className='box bg-3'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ slideLeftActive: true })}>show</button>
            <button onClick={() => this.setState({ slideLeftActive: false })}>hide</button>
          </div>
          
          <div id='slide-top'>
            <h2>Slide top</h2>

            <TransitionGroup>
              {
                this.state.slideTopActive &&
                <CSSTransition timeout={250} classNames='slide--top'>

                  <div className='box bg-3'></div>

                </CSSTransition>
              }
            </TransitionGroup>

            <br />
            <button onClick={() => this.setState({ slideTopActive: true })}>show</button>
            <button onClick={() => this.setState({ slideTopActive: false })}>hide</button>
          </div>

        </div>

      </div>
    )
  }
}

export default App
