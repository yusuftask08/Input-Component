import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import { useState } from 'react';

function App() {
  const [inputSm, setInputSm] = useState('')
  const [inputMd, setInputMd] = useState('')
  const [inputLg, setInputLg] = useState('')
  const [inputxLg, setInputxLg] = useState('')

  const handleOnChangeSm = (query) => {
    setInputSm(query);
    console.log('query sm', query)
  }

  const handleOnChangeMd = (query) => {
    setInputMd(query);
    console.log('query md', query)
  }

  const handleOnChangeLg = (query) => {
    setInputLg(query);
    console.log('query lg', query)
  }

  const handleOnChangexLg = (query) => {
    setInputxLg(query);
    console.log('query xlg', query)
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Software Adventures - Input Component</code>
        </p>
          <Input size='small' placeholder='Small Ürün Ara..' label='Small' value={inputSm} onChange={handleOnChangeSm} setValue={setInputSm} />
          <Input size='medium' placeholder='Medium Ürün Ara..' label='Medium' value={inputMd} onChange={handleOnChangeMd} setValue={setInputMd} />
          <Input size='medium' placeholder='Kapalıyım :( ' label='Disabled' disabled={true} />
          <Input size='large' placeholder='Large Ürün Ara..' label='Large' value={inputLg} onChange={handleOnChangeLg} setValue={setInputLg} />
          <Input size='xLarge' placeholder='xLarge Ürün Ara..' label='xLarge' value={inputxLg} onChange={handleOnChangexLg} setValue={setInputxLg} />
      </div>
    </div>
  );
}
export default App;