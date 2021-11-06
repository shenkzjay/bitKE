import Layout from "../components/Layout"
import dynamic from "next/dynamic"
import Style from "../styles/Container.module.css"
import Features from "./Features";
import About from "./About";
import { useState } from "react";

//export Home

function Home (){

  const MapDisplay = dynamic(() => import("../components/MapDisplay"), {
  loading: () => <p>"Loading..."</p>,
  ssr: false
});

  return (
    <div className={Style.Wrapper}>
      <Layout>
        <div className={Style.Container}>
          <div className={Style.Title}>
            <h1 className={Style.Header}>BitKE</h1>
            <p className = {Style.Text}>
              Providing Marketing and PR solutions for product, service, and
              events around finance, crypto, and the blockchain ecosystem in
              Kenya and the entire Africa.
            </p>
          </div>
          <div className={Style.MapStyle}>
            <MapDisplay />
          </div> 
        </div>
        <div>
        <About />
        </div>
        <div>
        <Features />
        </div>
      </Layout>
    </div>
  );
}



export default Home;


