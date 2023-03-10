import './App.css';
import Profile from "./components/Profile"
import { useState, useEffect } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [party, setParty] = useState(false);

  // useEffect(() => {
  //   // This function runs anytime the component mounts,
  //   // or whenever any of its internal states change
  //   console.log("Hello")
  // })

  useEffect(() => {
    // This function runs anytime the component mounts,
    // or whenever any of the variables in the dependency array change in value
    console.log("Now this is epic")
  }, [counter])

  return (
    <div className="App" style={{ backgroundColor: party ? "turquoise" : "white" }}>
      <h1>{counter}</h1>
      <button onClick={() => { setCounter(counter + 1) }}>
        Click me
      </button>

      <button onClick={() => { setParty(!party) }}>Party</button>

      <p>Hello world</p>
      <Profile description="I am shrek haha" name="Shrek" image="https://preview.redd.it/o3ptlv2r6d681.jpg?width=640&crop=smart&auto=webp&s=55b318959c4cfd9f9f7c952be401389a7913fe21" />
      <Profile description="I am a tkd instructor" name="Seungha Lee" image="https://www.fight4balance.org.au/Images/people/JHN_53921.jpg" />

      {party && <Profile description="I LOVE PARTYING" name="Donald Lee" image="https://donaldlee.xyz/images/Donald_2022.jpg" />}
    </div>
  );
}

export default App;
