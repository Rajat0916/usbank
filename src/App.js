import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    const formData = new FormData();
    formData.append('title', 'My Vegas Vacation');
    formData.append('paymentAmount', '2000')
    formData.append('paymentDate', '2022/09/02')

    fetch(`http://${window.location.host}`, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])
  
  const handleClick= ()=>{
    fetch(`http://${window.location.host}`)
    .then(response => response.json)
    .then(data=> console.log(data))
  }
  
  return (
    <div className="App">
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default App;
