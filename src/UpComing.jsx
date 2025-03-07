import React from "react";
import {useEffect , useState} from "react";

const UpComing = () =>{

  const [data, setData] = useState(null);
  
    useEffect(() => {
  
      const fetchData = async () => {
  
        try {

          const response = await fetch('https://api.cricapi.com/v1/series?apikey=4a78e7b7-68fc-42b8-8da3-858940a93dd5&offset=0');
          const info = await response.json();
          setData(info);

        }
      
        catch (error) {

        console.error("Error fetching data :", error);

      }
  
    };
  
  fetchData();
    
}, []);

const allowed = ["A", "I", "S", "W", "P", "B", "E", "N", "S", "Z"];

return(

  <div>

  <h1 id = "upcoming">

    <center>UpComing &nbsp; Series</center>

  </h1>

<div id = "container">

  {data && data.data && data.data.length > 0 ? (

    data.data.filter((series) => {

      const startDate = new Date(series.startDate);
      const currentDate = new Date();

  return (

    allowed.includes(series.name.charAt(0)) && startDate > currentDate

  );

})

.map((series, index) => (

  <div key = {index} id = "series">

    <div id="outer">

      <div className="match">{series.name.split(/,|2/)[0]}</div>

    </div>

    <div style={{textAlign: "center" , marginTop : "15px" , letterSpacing : "1px"}}>

      START DATE : {series.startDate.split("-").reverse().join("-")}

    </div>

    <div style={{textAlign: "center" , letterSpacing : "1px"}}>

      END DATE : {series.endDate.split("-").reverse().join("-")}

    </div>

    <div style = 
    {{background : "rgb(126, 235, 126)" , height : "25px" , width : "100%" , 
    borderRadius : "10px" , textAlign : "center" , lineHeight : "25px" , placeItems : "center" , 
    letterSpacing : "2px"}}>

      MATCHES : {series.matches}

    </div>

    <div style={{textAlign: "center" , letterSpacing : "1px"}}>

      ONE DAYS : {series.odi}

    </div>

    <div style={{textAlign: "center" , letterSpacing : "1px"}}>

      T-20 INTERNATIONALS : {series.t20}

    </div>

    <div style={{textAlign: "center" , letterSpacing : "1px"}}>

      TEST MATCHES : {series.test}

    </div>

  </div>

))

  ) : (

  <p>

    LOADING.. PLEASE WAIT

  </p>

  )}

  </div>

</div>
  
  );

}

export default UpComing;