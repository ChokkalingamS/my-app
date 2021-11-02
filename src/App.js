
import './App.css';

export default function App()
{
  // let name=["Chokka","Selva","Chokkz"];
  let names=[
    {name:"Chokka",src:"https://1.bp.blogspot.com/-NiNaLUVIuaE/XdP7uYpCD_I/AAAAAAAAbu8/j1n9UFpof_QqchUqFqJO2ZNcu6wRToLpwCLcBGAsYHQ/s16000-rw/24%2BHearts%2BDP%2BProfile%2BPictures%2Bcollection%2B2019%2B-facebookdp%2B%252817%2529.jpg"},
    {name:"Selva",src:"https://wallpapercave.com/wp/wp5047303.jpg"},
    {name:"Chokkz",src:"https://waukeepubliclibrary.org/sites/default/files/MasonJarLanternArt.jpg"},
    {name:"Chokkz1707",src:"https://waukeepubliclibrary.org/sites/default/files/MasonJarLanternArt.jpg"}
  ];
  return (
    <div className="text">
     
    { names.map(x=><Data s={x}/>)}
  
      {/* <Data name="SelvaKumar"/> */}
      
    </div>
  );
}



// function Data(props)
//  {
//    console.log(props);
//    let {s:candidate}=props;
//   //  const name="Chokkz1707";
//   return(<div>
//   <h1>Hello {candidate} 😎😎</h1>
                                              //  s:{name="chokkz",src="jygbjyh"}
                                              // props.s.name,props.s.src
                                              // let{s:name,s:src}=props
//   </div>);
  
// }





function Data(props)
 {
   console.log(props.s);
 let{s:{name:data,src:pic}}=props
  return(<div>
  <h1>Hello {data} 😎😎</h1>
  {/* <img src="https://1.bp.blogspot.com/-NiNaLUVIuaE/XdP7uYpCD_I/AAAAAAAAbu8/j1n9UFpof_QqchUqFqJO2ZNcu6wRToLpwCLcBGAsYHQ/s16000-rw/24%2BHearts%2BDP%2BProfile%2BPictures%2Bcollection%2B2019%2B-facebookdp%2B%252817%2529.jpg"></img> */}
 <img src={pic} alt="dp"></img>
  </div>);
  
}