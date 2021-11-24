import Style from "../styles/Feature.module.css"

function Features (){
    return (
      <div className={Style.Wrap}>
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
            <span className={Style.Icon}><img src="G2.png" width="80px" height="80px" alt="graph icon"/></span>
            <h3 className={Style.Title}>Market Entry/Assessment</h3>
            <p>We provide top notch insights into the market across the ecosystem.
            We have been part of enabling market
entry to top tier clients in the 
industry
</p>

          </div>
          <div className={Style.Card1}>
          <span className={Style.Icon}><img src="G1.png" width="80px" height="80px"  alt="tv icon"/></span>
            <h3 className={Style.Title}>Training/Education</h3>
            <p> We provide tailormade solutions to various target
audiences, backed by credible research data and/or as part of your market entry planning.
. We provide tailormade solutions</p>
          </div>

          <div className={Style.Card1}>
          <span className={Style.Icon}><img src="G3.png" width="80px" height="80px"  alt="customer icon"/></span>
            <h3 className={Style.Title}>Consumer Engagement</h3>
            <p> prioritize public engagement across the board. We leverage on this by offering our clients strategic communications</p>
          </div>
        </div>
        </div>
        </div>
      
    );
}

export default Features;