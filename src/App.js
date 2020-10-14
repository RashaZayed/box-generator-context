import React,{useState} from 'react';
import MyContext from './MyContext'
import Input from './components/Input'
import './App.css';
import Results from './components/Results';

function App() {
  const [color ,setColor] = useState([ ]);
  const [dimension , setDimension] = useState({
    width: '',
    height: '',
  });
  const [width , setWidth] =useState(0);


  return (
    <div className="App">
      <MyContext.Provider value={ {color,setColor } }>
      <Input dimension={dimension} setDimension={setDimension}/>
      <Results dimension={dimension}/>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
