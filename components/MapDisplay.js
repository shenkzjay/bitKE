import { React, useEffect, useState } from "react"
// import ReactMapGL from "react-map-gl"
import axios from "axios"
import Style from "../styles/Markerstyle.module.css"
// import ReactMapGL, { Marker } from "react-map-gl"
// import 'mapbox-gl/dist/mapbox-gl.css'; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'




/** 

 function MapDisplay () {

    //UseState to set map center, viewport and zoom
   const [ viewport, setViewport ] = useState({   //setting the viewport to state
        latitude:7.1881,                           //defining view port key values
        longitude:21.0936,                         //
        zoom:2.4,   
        width:'100vw',
        height:'100vh'                                //
      })


//useEffect to fetch stats 
    useEffect(() => {
        (async function(){
            const response = await axios.get(`${process.env.ROOT_API_BASE_URL}/fetch/stats`)   //async function to await axios response
          
            if(!response.data.success){
              return  console.log("error occured")
                
            }
            console.log(response.data.data)
            setStats(response.data.data)
        }) ()
    }, [])


    useEffect(() => {
        setViewport(state => ({
          ...state,
          width: mediaWidth
        }));
      }, [mediaWidth]);

   
//Map stats properties
    const [allStats, setStats] = useState([])
    return (
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic2V1bmppZGUiLCJhIjoiY2t2MjJmcDA2M3R6djMwczdydWl2aXdvbCJ9.DcWaanoAGiZl5y-opzsSkQ"
        //mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={viewport =>{
          setViewport(viewport)
        }}
        >
        {allStats.length > 0 && allStats.map((stat, index)=>{
            return  <Marker key={index} latitude={Number(stat.latitude)} longitude={Number(stat.longitude)}>
                <div className={Style.Markerstyle}>
            <div className = {Style.pin}></div>
            <div className = {Style.pulse}></div>
            </div>
           </Marker>
        })}
        
        </ReactMapGL>
    )

 }



export default MapDisplay
**/

function MapDisplay(){


    const [ viewport, setViewport ] = useState({   //setting the viewport to state
        latitude:7.1881,                           //defining view port key values
        longitude:21.0936,                         //
        zoom:2.6,   
        width:'100vw',
        height:'100vh',
        scrollWheelZoom:'false'                                //
      })

    useEffect(() => {
        (async function(){
            const response = await axios.get(`${process.env.ROOT_API_BASE_URL}/fetch/stats`)   //async function to await axios response
          
            if(!response.data.success){
              return  console.log("error occured")
                
            }
            console.log(response.data.data)
            setStats(response.data.data)
        }) ()
    }, [])


    const [allStats, setStats] = useState([])
    return(
        <div>
        <MapContainer 
       center = {[viewport.latitude, viewport.longitude]} 
       zoom= {viewport.zoom}
       className = {Style.Africa}
         mapboxApiAccessToken="pk.eyJ1Ijoic2V1bmppZGUiLCJhIjoiY2t2MjJmcDA2M3R6djMwczdydWl2aXdvbCJ9.DcWaanoAGiZl5y-opzsSkQ"
         //mapStyle="mapbox://styles/mapbox/dark-v8"
      
         >

             
            <TileLayer 
            url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
            />

            {allStats.length > 0 && allStats.map((stat, index)=>{
            return 
            <Marker key={index} latitude={Number(stat.latitude)} longitude={Number(stat.longitude)}>

                <div className={Style.Markerstyle}>
            <div className = {Style.pin}></div>
            <div className = {Style.pulse}></div>
            </div>
            <Popup>

            </Popup>
           </Marker>
        })}

        </MapContainer>
        </div>
    )
}

export default MapDisplay






