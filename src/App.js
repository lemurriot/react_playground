import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Tabs from './state/Tabs';

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip message='tooltip message' color="hotpink">
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message' color="#126BCC">
    officiis
  </Tooltip>
)

class App extends React.Component {
  state = {
    stepInput: 1,
    step: 1
  }

  handleInput = e => {
    this.setState({
      stepInput: e.target.value
    })
  }

  handleStepSubmission(){
    this.setState({
      step: Number(this.state.stepInput)     
    })
    this.setState({
      stepInput: ''
    })
    console.log(this.state.step)
  }
  render(){
    return (
        <main className='App'>
          <Messages name="Messages" unread={0}/>
          <Messages name="Notifications" unread={10}/>
          <Split className='left' flexBasis='2'>
            This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
            {/* make another tooltip directly inside the App */}
            <Tooltip message='one more tooltip message'>
              Necessitatibus?
            </Tooltip>
          </Split>
          <Split className='right'>
            This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
          </Split>
          <TheDate />
          <div className="step-container">
            <input type="number" onChange={(e) => this.handleInput(e)} value={this.state.stepInput}/>
            <button onClick={() => this.handleStepSubmission()}>Submit</button>
            <Counter step={this.state.step} />
          </div>
          <Tabs />
        </main>
      )
    }
}

export default App