import React, { useEffect, useState } from 'react'
const FetchAPIReact =() => {
    const [convertedJson,setConvertedJson]=useState([]);
    const handleFetch=async()=>{
        const fetchedData=await fetch('https://api.github.com/users');
    setConvertedJson(await fetchedData.json());
    console.log(convertedJson);
    }
    
    useEffect(()=>{
        handleFetch();
    },[]);
  return (
    <>
        {
            convertedJson.map((curEle)=>{
                return(
                <div>
                    <h1>The Name of the city is {curEle.id}.{curEle.login}</h1>
                </div>);
            })

        }
    </>
  )
}

export default FetchAPIReact