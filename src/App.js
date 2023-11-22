import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import { GifCard } from './components/GifCard';

function App() {
  const [data, setData] = useState([]);
  const [filterdata,setfilterdata]=useState([]);
  const [text,setext]=useState("");
  const [serchkey,setsearchkey]=useState("");

  useEffect(()=>{
    const getData=async()=>{
           const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: 100},
    headers: {
      'X-RapidAPI-Key': 'f29dd72edbmsh97113ab990ccb5fp1ffb87jsn3068bca06d4d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    
  };
  
  try {
    const response = await axios.request(options);
    
    setData(response.data);
setfilterdata(data);
   
  } catch (error) {
    console.error(error);
  }
  
      
    }
    getData();
    
  },[])



  useEffect(()=>{
    const getData=async()=>{
           const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: 100},
    headers: {
      'X-RapidAPI-Key': 'f29dd72edbmsh97113ab990ccb5fp1ffb87jsn3068bca06d4d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    
  };
  
  try {
    const response = await axios.request(options);
    
    setData(response.data);
setfilterdata(data);

if(text!=""){

  const FilteredData=data.filter((el)=>{})

}
   
  } catch (error) {
    console.error(error);
  }
  
      
    }
    getData();
    
  },[text,data])

const clickHandle=()=>{
  setsearchkey(text);
  console.log(serchkey);
}



  return (
    <div className="App">
      <div className='flex items-center justify-center'>
      <input value={text} className='border-2 border-black p-4 rounded-xl w-96' placeholder='Search any Exercise GIF' onChange={(e)=>setext(e.target.value)}/>
       <button className='border-2 border-black p-3 rounded-xl ml-2' onClick={clickHandle}>Search GIF</button>
      </div>
    
     <div className='flex flex-wrap'>
     {filterdata.map((el)=>{
      return <GifCard gifData={el}/>
     })}

     </div>
     
    </div>
  );
}

export default App;
