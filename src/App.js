import List from './components/List'
import Details from './components/Details'
import './App.css';
import { useState } from 'react'

function App() {

  const [user, setUser] = useState({});


  return (
    <div className="App">
      <List onChange={setUser} />
      {user.id ? <Details id={user.id} /> : null}
    </div>
  );
}

export default App;
