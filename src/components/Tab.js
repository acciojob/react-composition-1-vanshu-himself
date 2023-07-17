import React, { useState } from "react";

function Tabs({arr}){
const [tab, setTab] = useState(0);

const handleTabClick = (i) => {
    setTab(i);
  };
    return (
    <>
     <ul>
        {arr.map((tab, i) => (
          <li
            key={i}
            onClick={() => handleTabClick(i)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <p>
      This is the content for {arr[tab].content}.
      </p>
    </>
);
}

export default Tabs;