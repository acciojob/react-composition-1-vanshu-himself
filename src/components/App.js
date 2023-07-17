
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";
const tabs=[{title:"A", content:"Tab 1"},{title:"B", content:"Tab 2"},{title:"C", content:"Tab 3"}]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
       
        
        <Tab tabs={tabs}/>
    </div>
  )
}

export default App
