import React, { useEffect } from 'react'
import axios from 'axios';

const App = () => { 
  const [userData, setUserData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
 const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getData();
  }, [index]);

  let printData = <h3>No user </h3>;
  if (userData.length > 0) {
    printData = userData.map((user, idx) => (
      <div className='font-serif text-red-800' key={user.id}>
        <p>{user.author}</p>
        <img src={user.download_url} alt={user.author} className='w-48 h-48 object-cover rounded-3xl'/>
      </div>
    ));
  }

  return (
    <div className='bg-black text-white h-screen overflow-auto'>
      <button onClick={getData} className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-cyan-50'>Get Data</button>
      <div className="flex flex-wrap gap-3.5">
        {printData}
      </div>
      <div className="flex justify-center gap-5 p-4 items-center">
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }} className='bg-amber-800 rounded-3xl px-4 py-2'>Prev</button>
        <h4>Page {index}</h4>
      <button onClick={()=>{
        setIndex(index+1)
      }} className='bg-amber-800 rounded-3xl px-4 py-2'>Next</button>
      </div>
    </div>
  )
}

export default App
