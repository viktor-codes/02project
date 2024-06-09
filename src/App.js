import ShowColor from './ShowColor';
import Input from './Input';
import { useState } from 'react';

function App() {

  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ShowColor 
      colorValue={colorValue} 
      hexValue={hexValue}
      isDarkText={isDarkText} 
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
