import Style from "../styles/About.module.css"
import Image from "next/image"


// define function for about page
function About(){
    return (
      <div className={Style.Wrap}>
           
        <div className={Style.About}>
          <div className={Style.Text}>
          <h2 className={Style.Header}>Who we are</h2>
            We are Africa's Largest and Most Influential Blockchain and Crypto
            Media, Marketing and Advisory firm. BitKE is a leading integrated
            marketing and PR outfit providing solutions for your product,
            service, and events around finance, crypto, and the blockchain
            ecosystem in Kenya and the entire Africa. We have a growing
            dedicated audience that is excited and equally curious about
            Africa’s digital revolution especially around the blockchain and
            crypto space, and the vast opportunities and potentials embedded
            upon the mobile money.
            <br />
            <br />
            Additionally, we have a network of African crypto and blockchain
            influencers, media networks, and communities across Africa enabling
            us to reach across any part of the continent.
          </div>

          <div>
          <Image src={"/who we are.png"} width="436px" height="401px"/>
          </div>
        </div>


        <div className={Style.Expertise}>
        <div>
          <Image src={"/our expertise.png"} width="436px" height="401px" />
          </div>
              
          <div className={Style.Text}>
          <h2 className={Style.Header}>Our Expertise</h2> 
              We provide a blend of creative marketing and communications
              disciplines/channels for our clients. We structure our
              collaborations around our clients needs and scope. Our approach is
              based on providing accurate, transparent, timely and market driven
              analysis and reporting.
            </div>
         
        </div>
        </div>
    );
}

export default About;