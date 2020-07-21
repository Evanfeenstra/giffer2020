import React, {useState} from 'react'
import './App.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [text,setText] = useState('')

  function search(){

  }

  return (
    <div className="App">
      <div className="searchbar">
        <TextField label="Search" variant="outlined" 
          color="primary" placeholder="Search for a meme"
          value={text} onChange={e=> setText(e.target.value)}
          onKeyPress={e=>{
            if(e.key==='Enter') search()
          }}
        />
        <Button variant="contained" color="primary"
          style={{height:55,marginLeft:8}}
          disabled={!text} onClick={search}>
          Search
        </Button>
      </div>
    </div>
  )
}

export default App;
