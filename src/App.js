import "./App.css";
import React from "react";

function App() {
  
  let [n, setN] = React.useState(5); 
	let changeN = (e) => setN(Number(e.target.value));

	return <div className="App">
  
    <p>Число натуральных чисел: <input type="text" placeholder="Укажите N" value={n} onChange={changeN}/></p>
    <p>Сумма натуральных чисел: {(n*(n+1))/2}</p>

	
	</div>;


}

export default App;
