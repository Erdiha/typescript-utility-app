import React,{useState} from 'react'
import axios, {AxiosResponse} from 'axios';
import './stylings/weather.css'

type weatherData  ={
 main: {
    temp: number,
    humidity: number,
    feels_like:number
  };
  sys: {
    country:string
  };
  name: string;
  weather:
  [
    {description:string}
   
  ];
}

function Weather() {
     var apis = {
        keys:"78adbb941c5f2930c12798f26a282407",
        base:"https://api.openweathermap.org/data/2.5/"
    }
    const [data, setData] = useState<weatherData>();
    const [location,setLocation] =useState("")
    const url = `${apis.base}weather?q=${location}&APPID=${apis.keys}&units=imperial`
    async function handleWeather(event:any){
        if (event.key ==="Enter")
        {
            await axios.get(url).then((response:AxiosResponse)=>{
               setData(response.data)
                console.log(response.data)
           })
            setLocation('')
        }
  }
  return (
    <>
      <div className="weather-wrapper"> 
            <input 
            placeholder="Search for weather..." 
            type="text" 
            className="weather-input"
            onChange={(e)=>setLocation(e.target.value)}
            onKeyPress={handleWeather}
        />
        {data &&
          <div className='weather-section'>
            <span className='w name'>In {data.name +","} <b>{" "+ data.sys.country}</b> </span>
            <br />
            <span className='w'> Temperature is
              <span className='temp'>{" "+data.main.temp +"° F"}</span>
            </span>
            <br />
            <span className='w desc'> With <b>{data.weather[0].description }</b></span>
            <span className='w feelslike'> It feels like <b>{data.main.feels_like +"° F" }</b></span>
            <span className='w humidity'> The humidity is <b>{data.main.humidity +"%" }</b></span>
          </div>}
      </div>
      
    </>
  )
}
export default Weather