import {React,useState} from 'react';

const Home = () => {
    const [CityVal,setCity]=useState();
    const [weather,setWeather]=useState({
        city_name:"",
        temp:"",
        date:"",
        day:"",
        temp_status:"",
    });
    const changeCity=(e)=>{
        console.log(CityVal)
        var weather={};
        setWeather(weather);
       setCity(e.target.value);
    }

    const findWeather=async(e)=>{
        e.preventDefault();

         console.log("hello...........",CityVal)
        if(CityVal===undefined){
            console.log(".......")
            alert("please enter city name");
            return;
        }    

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${CityVal}&appid=fae395bb422428e500e2e56c938e78a1&units=metric`;
        const response=await fetch(url);
        const data=await response.json();
        
        const arrData=[data];
        console.log(data);
           var weather={  city_name:"",
           temp:"",
           date:"",
           day:"",
           temp_status:"",};
        
              weather.city_name=`${arrData[0].name} , ${arrData[0].sys.country}`;
             
             
              weather.temp=arrData[0].main.temp;
            //  console.log(arrData[0].main.temp);

              

             // weather.temp_mod=arrData[0].weather[0].main;

                      
            
              weather.temp_status=arrData[0].weather[0].main;

              const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              const d=new Date();
              const c=weekday[d.getDay()];
              weather.day=c;

               const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
               const m=months[d.getMonth()];
               const d_ate=d.getDate();

               weather.date=`${d_ate} ${m}`;
 
              setWeather(weather);

              console.log(weather);

    }

    return (
     <>
            <div class="container-fluid main_menu bg-dark ">
                <div class="row">
                    <div class="col-md-10 col-12 mx-auto">
                        <nav class="navbar navbar-expand-lg ">
                            <a class="navbar-brand" href="#"><i class="fa-regular fa-snowflake"></i>SinghPrathvi<i class="fa-regular fa-snowflake"></i></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">weather</a>
                                    </li>

                                </ul>

                            </div> */}
                        </nav>
                    </div>
                </div>
            </div>

            <div class="container main_menu bg-dark text-light w-60 mt-5">
                <h1 class="text-center font-weight-bold text-ligh text-capitalize">Welcome to weather app</h1>


                <div class="row">
                    <div class="col-md-10 col-12 ml-auto">

                        <div class="main_content">
                            <form class="temp_form mt-5">
                                <input type="text" id="cityName" placeholder="Enter your city name"
                                name={CityVal} onChange={changeCity} />
                                    <button type="submit"  id="submitBtn" onClick={findWeather}>search</button>
                                    </form>
                                </div>

                                <div class="tempInformation">
                                    <div class="top_layer ">
                                        <p id="day">{weather.day}</p>
                                        <p id="today_data">{weather.date}</p>

                                    </div>

                                    <div class="main_layer">
                                        <p id="city_name">{weather.city_name}</p>
                                        <div class="middle_layer data_hide">

                                           
                                            {
                                               weather.temp !== "" ? 
                                               <span><span id="temp" >{weather.temp}</span>
                                               <sup>o</sup>C</span>
                                               :
                                               <h1></h1>
                                            }
                                            
                                            
                                            <p id="temp_status">{weather.temp_status}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>





            </>
            )
}
 
export default Home; 
