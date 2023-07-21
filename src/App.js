import {useState} from 'react'

import './App.css'

const App = () => {
  const [click, setClick] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = e => {
    setInputValue(e.target.value)
  }

  const onSave = () => {
    setClick(prevState => !prevState)
  }

  const onEdit = () => {
    setClick(prevState => !prevState)
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>Editable Text Input</h1>
        {click ? (
          <div className="input-container">
            <p className="para">{inputValue}</p>
            <button onClick={onEdit} type="button" className="save-button">
              Edit
            </button>
          </div>
        ) : (
          <div className="input-container">
            <input
              onChange={onChangeInput}
              type="text"
              className="input"
              placeholder="Enter Text"
              value={inputValue}
            />
            <button onClick={onSave} type="button" className="save-button">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default App
