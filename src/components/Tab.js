import React,{useState} from "react";
// tabs = [{}]
const Tab=({tabs})=> {
    const [tabClicked, setTabClicked]=useState("");
    function handleClick(content){
        setTabClicked(content);
    }
    return(
        <div>
            <ul>{
         tabs.map((tab)=> (  
            <li onClick={()=>handleClick(tab.content)}>
                {tab.title}
                </li>
         ))
}</ul>
{
tabClicked && 
<p>This is the content for {tabClicked}.</p>}
        </div>
    )
}
export default Tab; 