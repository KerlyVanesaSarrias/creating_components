
import { useState } from 'react';
import './App.css'
import { Child } from './components/Child';
// import { FirstComponent } from './components/FirstComponent'
// import { SecondComponent } from './components/SecondComponent'
import { ThirdComponent } from './components/ThirdComponent';

function App() {

  const [name, setName] = useState("Kerly Vanessa Sarrias");

  return (
    <>
      <div className="App">
        <header className="App-header">
    
          <hr className='white-hr'/>
        {/* <FirstComponent /> */}
        <hr className='white-hr'/>
        {/* <SecondComponent /> */}
        <hr className='white-hr'/>
        <ThirdComponent
          name="Kerly"
          last_name="Sarrias"
          age="23"
        />
        <hr className='white-hr'/>
        <Child 
          name={name}
          setName={setName} 
        />
        <hr className='white-hr'/>
        </header>
      </div>
    </>
  )
}

export default App
