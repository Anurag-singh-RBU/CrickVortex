import React from "react";
import {useEffect , useState} from "react";

const OnGoing = () =>{

    const [data , setData] = useState(null);

        useEffect(() => {
      
          const fetchData = async () => {
      
            try {
    
              const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=4a78e7b7-68fc-42b8-8da3-858940a93dd5&offset=0');
              const info = await response.json();
              setData(info);
    
            }
          
            catch (error) {
    
            console.error("Error fetching data :", error);
    
            }
      
        };
      
      fetchData();
        
    }, []);

    return(

        <div>

        <h1 id = "upcoming">

        <center>OnGoing &nbsp; Series</center>

        </h1>

        <div id = "container">

        {data && data.data && data.data.length > 0 ? (

        data.data.filter((series) => {

            const startDate = new Date(series.date);
            const currentDate = new Date();
      
            return (

                startDate.getFullYear() === currentDate.getFullYear() &&
                startDate.getMonth() === currentDate.getMonth() &&
                startDate.getDate() === currentDate.getDate()

            );

    }).map((series , index) => (

        <div key = {index} id = "seriesTwo">

        <div id = "game">

        <div className = "match">{(series.name.split(','))[0]}</div>

        </div>

        <div style = {{background : "rgb(126, 235, 126)" , height : "25px" , width : "100%" , 
        borderRadius : "10px" , textAlign : "center" , lineHeight : "25px" , placeItems : "center" , 
        letterSpacing : "2px" , boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"}}>

        FORMAT : {series.matchType.toUpperCase()}

        </div>

        <div style = {{background : "rgb(226, 255, 61)" , height : "30px" , width : "100%" , 
        borderRadius : "10px" , textAlign : "center" , lineHeight : "30px" , placeItems : "center" , 
        letterSpacing : "1px" , fontSize : "14px" , boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"}}>
        
        {(series.venue.split(','))[0]}

        </div>

        <div style = {{ 
        background: "rgb(8, 243, 255)", 
        height: "100px", 
        width: "100%", 
        borderRadius: "10px", 
        textAlign: "center", 
        lineHeight: "35px", 
        placeItems: "center", 
        letterSpacing: "1px", 
        fontSize: "14px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" 
        }}>

        {series.score && series.score.length > 0 && series.score[0]?.inning? (
          <>
            <strong>{series.score[0].inning.split("1")[0]}</strong><br />
            {series.score[0].r !== undefined ? `${series.score[0].r}/${series.score[0].w} in ${series.score[0].o} overs`: "Yet to Bat"}
          </>

    ) : (

      <span>Score Not Available</span>

    )}

</div>

<div style = {{ 
    background: "rgb(252, 155, 173)", 
    height: "100px", 
    width: "100%", 
    borderRadius: "10px", 
    textAlign: "center", 
    lineHeight: "35px", 
    placeItems: "center", 
    letterSpacing: "1px", 
    fontSize: "14px", 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" 
    }}>

    {series.score && series.score.length > 1 && series.score[1]?.inning ? (
        <>
          <strong style={{ color: "black" }}>
            {series.score[1]?.inning?.split("1")[0] !== series.score[0]?.inning?.split("1")[0] ? series.score[1]?.inning?.split("1")[0] : "Innings Not Available"}
            </strong><br/>
            {series.score[1]?.r !== undefined ? `${series.score[1].r}/${series.score[1].w} in ${series.score[1].o} overs`: <span style = {{fontWeight: "bold"}}>0/0 in 0 overs</span>}
        </>

    ) : (

        <span style={{ fontWeight: "bold" }}>Score Not Available</span>

    )}

</div>

  <div style = {{background : "rgb(243, 161, 244)" , height : "30px" , width : "100%" , 
  borderRadius : "10px" , textAlign : "center" , lineHeight : "30px" , placeItems : "center" , 
  letterSpacing : "1px" , fontSize : "14px" , boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"}}>
  
    {(series.status.split("for"))[0]}

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

export default OnGoing;