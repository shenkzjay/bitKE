import { React, useEffect, useState, useRef } from "react"
import axios from "axios"
import Style from "../styles/Markerstyle.module.css"
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import Head from "next/head"


// commaNumber
import commaNumber from 'comma-number'

// div icon 
import L, { marker } from 'leaflet'




// init MapDisplay
function MapDisplay() {

  //init markerIcon
  const markerIcon = new L.divIcon({
    className: "title-text",
    iconAnchor: [12, 25],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -10],
    iconSize: [25, 41],
    html: `<div><div class=${Style.pin}></div><div class=${Style.pulse}></div></div>`
  });



  const [viewport, setViewport] = useState({
    latitude: 7.1881,
    longitude: 21.0936,
    zoom: 2.6,
    width: '100vw',
    height: '100vh',
    scrollWheelZoom: 'false'
  })

  // init allStats state
  const [allStats, setStats] = useState([])


  // init useEffect
  useEffect(() => {
    (async function () {
      const response = await axios.get(`${process.env.ROOT_API_BASE_URL}/fetch/stats`)

      if (!response.data.success) {
        return console.log("error occured")

      }
      console.log(response.data.data)
      setStats(response.data.data)
    })()
  }, [setStats])



  // init displayPopup state
  const [displayPopup, setDisplayPopup] = useState(false)

  // init markerRef 
  const markerRef = useRef(null)


  // init openPopup func
  const handleOpenPopup = (e) => {
       e.target.openPopup()

       markerRef.current = e
  }


  const handleClosePopup = () => {
    markerRef.current.target.closePopup()
  }




  return (
    <div className={Style.MapBody}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <MapContainer
        center={[viewport.latitude, viewport.longitude]}
        zoom={viewport.zoom}
        className={Style.Africa}
        mapboxApiAccessToken="pk.eyJ1Ijoic2V1bmppZGUiLCJhIjoiY2t2MjJmcDA2M3R6djMwczdydWl2aXdvbCJ9.DcWaanoAGiZl5y-opzsSkQ"
      //mapStyle="mapbox://styles/mapbox/dark-v8"

      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {allStats.length > 0 && allStats.map((stat, index) => {

          return <Marker eventHandlers={{ mouseover: (e) => handleOpenPopup(e) }} key={index} position={[stat.latitude, stat.longitude]} icon={markerIcon}>
            {/* // return <Marker onMouseOver={e => {e.target.openPopup()}}  onMouseOut={e => {e.target.closePopup()}}  key={index} position={[stat.latitude, stat.longitude]} icon={markerIcon}> */}
            <Popup className={Style.popup_data}>
            <div onMouseLeave={() => handleClosePopup()}>
              <h1>{stat.country}</h1>
              <p>Population: {commaNumber(stat.population)}</p>
              <p>Crypto Users: {commaNumber(stat.numberOfCryptoOwners)}</p>
              <p>People with internet Connection: {commaNumber(JSON.parse(stat.peopleWithInternetConnection).peopleWithInternet)}</p>
              </div>
            </Popup>
            
          </Marker>
        })}


      </MapContainer>
    </div>
  )
}

export default MapDisplay






