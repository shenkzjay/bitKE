import Style from "../styles/Feature.module.css"
import Image from "next/image"
function Features (){
    return (
        <div className={Style.Features}>
          <div className={Style.Value}>
            <h2 className={Style.Header}>Our Value</h2>
            <p>
              We provide a blend of creative marketing and communications
              disciplines/channels for our clients. We structure our
              collaborations around our clients needs and scope. Our approach is
              based on providing accurate, transparent, timely and market driven
              analysis and reporting.
            </p>
          </div>
        <br />
        <br />
        <div  className={Style.value}>
            <h2 className={Style.Header}>What we do</h2>
            <hr className={Style.Line}/>
          
            <p>
              We have a wide array of services to offer our clients, but we can
              generally boil all of our services down into one of these 3
              general categories:
            </p>
        </div>

        <div className={Style.Card}>
          <div className={Style.Card1}>
            <Image src={"/G1.png"}  height="80px" width="80px"/>
            <h3 className={Style.Title}>Market Entry/Assessment</h3>
            <p>We provide top notch insights into the market  a across the ecosystem.
We have been part of enabling market
entry to some of the top tier clients in the 
industry as well as leveraging upon the growing mobile money landscape 
significantly. – demonstration of market readiness?</p>

          </div>
          <div className={Style.Card1}>
          <Image src={"/G1.png"}  height="80px" width="80px"/>
            <h3 className={Style.Title}>Market Entry/Assessment</h3>
            <p>We provide top notch insights into the market  a across the ecosystem.
We have been part of enabling market
entry to some of the top tier clients in the 
industry as well as leveraging upon the growing mobile money landscape 
significantly. – demonstration of market readiness?</p>
          </div>
          <div className={Style.Card1}>
          <Image src={"/G1.png"}  height="80px" width="80px"  className={Style.Icon}/>
            <h3 className={Style.Title}>Market Entry/Assessment</h3>
            <p>We provide top notch insights into the market  a across the ecosystem.
We have been part of enabling market
entry to some of the top tier clients in the 
industry as well as leveraging upon the growing mobile money landscape 
significantly. – demonstration of market readiness?</p>
          </div>
        </div>
        </div>
      
    );
}

export default Features;