
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
 
  const data = {
    lower: () => setValue(Operations.lowerCase(value)),
    upper: () => setValue(Operations.upperCase(value)),
    reverse: () => setValue(Operations.reverseText(value)),
    sentence: () => setValue(Operations.sentenceCase(value)),
    inverse: () => setValue(Operations.inverseCase(value)),
  }

  const actionsWithText = (action) => data[action];
  
  return (
    <div className="App">
      <h2 className="App-header">
        <p>Write something and do magic.</p>
      </h2>
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
        <button onClick={actionsWithText('lower')}>lowercase</button>
        <button onClick={actionsWithText("upper")}>UPPERCASE</button>
        <button onClick={actionsWithText("reverse")}>Reverse</button>
        <button onClick={actionsWithText("sentence")}>Sentence case</button>
        <button onClick={actionsWithText("inverse")}>iNvErSe CaSe</button>
        <button onClick={clearForm}>Clear</button>
      </div>
      <p>{value}</p>
    </div>
  );
}

export default App;
