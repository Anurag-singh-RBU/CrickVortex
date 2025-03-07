import React from "react";
import data from './data.json'

const Countries = () =>{

    return(

        <div>

            <div id = "heading">

                <div id = "first">Here are the Interesting Facts
                <div id = "second">About International Teams
                </div></div>

            </div>

            <div id = "countries">

            {data.map((current) => {

                const {id , country , board , captain , interesting_facts} = current
                return <div class = "card" key = {id}>
                <h1><center>{country}</center></h1>
                <span className = "country">Board : {board}</span>
                <span className = "country">Captain : {captain}</span>
                <span className = "country">Interesting Fact : {interesting_facts}</span>

            </div>

            })}
           
            </div>

        </div>

    );

}

export default Countries;