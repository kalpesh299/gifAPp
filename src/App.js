import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import { GifCard } from './components/GifCard';

function App() {

 
  const [text,setext]=useState("");
  const [gifdata,setgifdata]=useState([]);
  const [searchKey,setSearchkey]=useState("");

  useEffect(()=>{
// console.log(searchKey)
   const getData=async()=>{

    const {data}=await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=KmbQ5nkbKYRtGFwhKMSBE0mtuMC2fLsN&limit=20`);

    setgifdata(data.data);
    // console.log(gifdata[0].images.fixed_height.webp);
// console.log(data.data[0].images.fixed_height.webp);
   }
  //  console.log(gifdata[0][0].images.fixed_height.webp)
     getData();
     
  },[searchKey])

  const clickHandle=()=>{
setSearchkey(text);
  }
 

  return (
    <div className="w-screen  bg-gray-500">
      <div className='flex items-center justify-center'>
        <input type="text" value={text} placeholder='Seacrh any GiF' className='border-2 mt-4 border-black p-4 rounded-xl w-96' onChange={(e)=>setext(e.target.value)}/>
        <button className='bg-black text-white w-32 p-3 rounded font-bold ml-3 mt-4' onClick={clickHandle}>Click</button>
      </div>

     <div className='flex flex-row flex-wrap justify-evenly  border-white  border-2  items-center w-1/2 m-auto mt-4 rounded-xl  bg-black'>
      {gifdata.map((el)=>{
       return <GifCard gif={el}/>
      })}
     </div>
    
    </div>
  );
}

export default App;
