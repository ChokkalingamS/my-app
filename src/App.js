import  { useState ,useEffect,useMemo} from 'react';

import "./App.css";

export default function App()
{
let [data,setData]=useState([]);
let [display,setDisplay]=useState([]);
useEffect((()=>
{
 fetch(`https://jsonplaceholder.typicode.com/${data}`)
.then(response => response.json())
.then(json=>setDisplay(json))

// .then(json => console.log(json))
// return ()=>setDisplay([]);

}),[data])

// console.log(display);

return(<div>
<button onClick={()=>setData("posts")}>Post</button>
<button onClick={()=>setData("users")}>Users</button>
<button onClick={()=>setData("photos")}>Photos</button>
{/* {display.map((x)=>{return <p>{(x)}</p>})} */}

{display.map((x)=>{ return <p>{x.name} {x.title}</p>})}

{/* <Get details={(data,display)}/> */}
</div>);
}

// function Get(props1,props2)
// {
//   // console.log(props1);
//   // console.log(props2);

//   return props2.details.id;
// }

// function Get(props)
// {
//   // let[name,username]=props.details;
// return (<div>
//   <p>{props["details"].map((x)=>{return <p>{(x.id)}</p>})} </p>

//   </div>)
// }

// export default function App()
// {
//   let [value,setValue]=useState(()=>{console.log("abb"); return 0});
//   return (
//     <div>
//     <button onClick={()=>setValue(value+1)}>+</button>
//     <p>{value}</p>
//     <button onClick={()=>setValue(value-1)}>-</button>
//     </div>
//   );
// }

// import { useState, useMemo } from "react";
// // import ReactDOM from "react-dom";

// function App() {
//   let [box, setBox] = useState([]);
//   const boxdata = () => setBox((t) => [...t, <Get />]);

//   let [count, setCount] = useState(0);
//   let counter = () => setCount((c) => c + 1);
//   // let sum=Calculate(count);
//   let sum = useMemo(() => Calculate(count), [count]);

//   return (
//     <div>
//       <h4>To do List</h4>
//       {box.map((box, index) => (
//         <ul>
//           <li>
//             <p key={index}>{box}</p>
//           </li>
//         </ul>
//       ))}
//       <button onClick={boxdata}>Add Data</button>

//       <button onClick={counter}>Count</button>
//       <p>Count:{count}</p>
//       <p>{sum}</p>
//     </div>
//   );
// }

// let Get = () => {
//   return <input type="text"></input>;
// };

// function Calculate(numm) {
//   for (let i = 0; i < 100000000; i++) {
//     numm += 1;
//     //  console.log("counting");
//   }
//   return numm;
// }

// export default App;
