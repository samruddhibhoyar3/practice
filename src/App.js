import React, { useState } from 'react'
import './App.css'
import { Button } from '@material-ui/core'

function App() {
  const [color, setColor] = useState('primary')
  function customMe() {
    setColor('secondary')
  }
  return (
    <div className='App'>
      <div className='h1'>react mui</div>
      <button>click on me</button>
      <Button>click click using material-ui</Button>
      <Button color='primary' size='small'>
        colour change material -ui
      </Button>
      <Button
        variant='outlined'
        onClick={() => {
          customMe()
        }}
      >
        change
      </Button>
    </div>
  )
}

export default App
