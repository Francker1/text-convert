
import { useState } from 'react';
import Operations from '../scripts/operations';

import './App.css';

const App = () => {

  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const clearForm = () => {
    setValue('');
  }

  const lowerCase = () => {
    setValue(Operations.lowerCase(value));
  }

  const upperCase = () => {
    setValue(Operations.upperCase(value));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Write something and do magic.</p>
      </header>
      <div>
        <form>
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            className="textarea"
            value={value}
            placeholder="Write something here"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="action-buttons">
        <button onClick={lowerCase}>lowercase</button>
        <button onClick={upperCase}>UPPERCASE</button>
        <button onClick={clearForm}>Clear</button>
      </div>
    </div>
  );
}

export default App;
