import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Input from './components/Inputs';
import View from './components/View';

function App() {

  const [name, setName] = useState('enter name');
  const [age, setAge] = useState('enter age');
  const [hobbies, setHobbies] = useState('enter hobby');

  return (
    <div className="App">
      <Input
        age={age}
        name={name}
        hobbies={hobbies}
        setName={setName}
        setAge={setAge}
        setHobbies={setHobbies}
      />
      <View
        passedName={name}
        age={age}
        hobbies={hobbies}
      />
    </div>
  );
}

export default App;
