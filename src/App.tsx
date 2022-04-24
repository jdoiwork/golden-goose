import { Button, TextField } from '@mui/material';
import React from 'react';

import './App.css';

type State = {
  api_key: string
  secret_key: string
  binance?: unknown
}

function App() {
  const [state, setState] = React.useState<State>({
    api_key: "",
    secret_key: "",
    binance: null,
  })

  const handleCreate = () => {
    console.log("create")

    setState(s => ({
      ...s,
      
    }))
  }

  const handleChange = (key: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(s => ({
      ...s,
      [key]: event.target.value,
    }))
  }

  return (
    <div className="App">
      <TextField id="api-key" label="API Key" variant="outlined" value={state.api_key} onChange={handleChange("api_key")} />
      <TextField id="secret-key" label="Secret Key" variant="outlined" value={state.secret_key} onChange={handleChange("secret_key")}/>
      <Button variant="contained" onClick={handleCreate}>Create</Button>
    </div>
  );
}

export default App;
