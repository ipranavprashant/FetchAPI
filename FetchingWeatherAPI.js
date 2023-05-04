import React, { useEffect , useState} from 'react'
const FetchingWeatherAPI =() => {
    const [regionDetails, setRegionDetails]=useState({});
    const [currentDetails, setCurrentDetails]=useState({});
    const handleFetch=async()=>{
        try{
            const fetchedData=await fetch('https://api.weatherapi.com/v1/current.json?key=dcbc3a49f1a44d8a9b1184038230301&q=Patna&aqi=yes');
            const convertedJson=await fetchedData.json();
            setRegionDetails(convertedJson.location);  //Note: you might have a doubt that if you remove .location here and instead write regionDetails.location.name in the jsx section. but the problem is it isn't working...so it is better to run the api link and check on how is the data given by the particular api in json format and then accordingly make the required variables using use state and do the changes, for eg if you go to the api link mentioned above, the api is giving data in the form of location, current, condition etc...each constituing of an array of elements, so I have created regionDetails using useState that takes the location details and we can created currentData using useState that takes the current details ka data which the api is giving.. and then we can smoothly access these useState variables in the jsx section
            setCurrentDetails(convertedJson.current);    
        }catch(error){
            console.log("Error hai bhai"+ error);
        }
    }
    
    useEffect(()=>{
        handleFetch();
    });
  return (
    <>
  
                <div>
                    <h1>The Name of the city is {regionDetails.name}
                    <br/>
                    Last Updated {currentDetails.last_updated}
                    </h1>
                </div>
    </>
  )
}

export default FetchingWeatherAPI