import { Children } from "react";
import { Navbar } from "react-bootstrap";
import Styles from "../styles/Portfolio.module.css";
import Layout from "../components/Layout";

function Portfolio() {
  return (
    <div className={Styles.Wrapper}>
      <Layout>
      <div></div>
      <div className={Styles.Header}>
        <h1>THE HOME OF BLOCKCHAIN AND CRYPTO IN AFRICA</h1>
        <h3>“Africa is the Final Frontier"</h3>
        <h4>Blockchain in Africa </h4>
        <p>
          The blockchain wave is sweeping across the world and Africa is riding
          it. The future looks bright and brightest on the mother continent.
          Blockchain technology presents us all with massive opportunities
          across all areas of life. The world’s economic and tech giants have
          acknowledged that Africa is the final frontier. Coupled with a growing
          mobile money adoption, and a growing smartphone and internet
          penetration across the board, we are ready to seize the benefits of
          blockchain technology.
        </p>
      </div>

      <div className={Styles.About}>
        <h1>About us</h1>
        <img src="/wwa1.svg"></img>

        <p>
          We stand as a Blockchain and Crypto authority, and one of Africa's
          most influential Blockchain and Crypto media and consultancy firm,
          based in Nairobi, Kenya. We are the go-to entry point of all matters
          blockchain in Africa for both our audiences and clients. We help
          clients understand and address the challenges of these disruptive
          technologies in the marketplace to provide actionable guidance on
          current and future market opportunities in Africa. We thus take a
          buyer-centric approach in order to understand “real-world” buyer and
          market needs versus the “echo chamber” of the industry. We have a
          growing dedicated audience that is excited and equally curious about
          Africa’s digital revolution within the blockchain and crypto space, as
          well as an unprecedented growing demand for capacity building. We have
          a network of crypto and blockchain influencers, media networks, and
          communities that enable us to widen our reach.
        </p>
      </div>

      <div className={Styles.Story}>
        <img src="/story.svg"></img>
        <p>
          BitKE was founded on the belief that blockchain is the foundation of
          the third-generation internet, and that cryptocurrencies will power
          this new economy. We are one of the earliest online publications in
          the blockchain and crypto space in Africa. As our audience and
          engagement grew over time, it became apparent that Africa is excited
          about decentralized technology and the potential that it promises for
          the continent. We also realized that there was scanty information and
          little or no documentation on Africa. Since then, there has been
          unprecedented growth in the space and BitcoinKE has been providing
          timely coverage and analysis of the trends to our audiences across
          Africa and the rest of the world. We have evolved to offer consultancy
          services tackling market dynamics including finance and tech entities.
        </p>
      </div>

      <div className={Styles.Values}>
        <h3>Our Values </h3>
        <p>
          We thrive in securing the TRUST we have in our vast audiences; We are
          PASSIONATE about fulfilling our desire to TRANSFORM our continent; And
          we serve with INTEGRITY.
        </p>
      </div>

      <div className={Styles.Why}>
        <img src="/why.svg"></img>
        <p>
          60% of Africa’s population was under the age of 25 in 2019. Africans
          have been successfully adopting leapfrogging technologies and
          solutions, including telecommunications, blockchain and crypto,
          characterizing us among the best early adopters in the world. Internet
          penetration rate on the continent is still low with Africa at 39.3%,
          against the world’s 60%. Seychelles and Kenya lead at 71% and 83%.
          Africa has seen a great increase in the usage of Internet since 2000.
          This could be because of the availability of more affordable
          smartphones as well as cheap mobile data plans. It is estimated that
          less than 5% of Africa’s population is actively involved in the
          blockchain and crypto space. However, it's growing at a rapid rate,
          coupled with a high bandwidth internet penetration that is averaging
          at 40%. There’s a huge gap that requires unique bridging approaches in
          order to demystify industry and market readiness, while unlocking
          sustainable solutions.
        </p>
      </div>

      <div className={Styles.Connect}>
        <img src="/connect.svg"></img>
        <p>
          For organizations looking to enter the African Blockchain and Crypto
          space, we are your ideal partner to help you get started, and succeed
          in this dynamic and unique place. We understand the African landscape
          and we have the experience needed to make your organization meet its
          objectives in advancing your Blockchain and Crypto agenda on the
          continent.
        </p>
      </div>
      <div className={Styles.ConnectChild}>
        <div className={Styles.WeActive}>
          <h3>We are active</h3>
          <p>
            We have an itinerary of activities such as weekly trainings (online
            and offline), webinars, meetups, interviews, and a strong social
            media presence. We are also well known for featuring prominent guest
            speakers to our events.
          </p>
        </div>

        <div className={Styles.Approach}>
          <h3>Our Approach</h3>
          <p>
            Our services are designed via integrated approaches. We feel that
            used together and in conjunction, they can create the most value for
            both our audiences and your business.
          </p>
        </div>
      </div>
      <div className={Styles.What}>
        <img src="/what.svg"></img>
        <p>
          We have a wide array of services to offer both our audiences and
          clients.
        </p>
      </div>

      <div>
        <div className={Styles.ClientHead}>
          <h3>For our Clients: </h3>
          <p>
            We pride ourselves in our flexibility and can certainly tailor a
            package specific to your needs. Services offered to our clients boil
            down into one of these 3 general categories:
          </p>
        </div>
        <div className={Styles.Client}>
          <div className={Styles.Num}>
            <h1>01</h1>
          </div>
          <div>
            <div>
              <h3>Market Entry/Assessment</h3>
              <p>
                {" "}
                We provide our clients with top-notch insights into the market
                intelligence and relevant use cases across the ecosystem . We
                have been part of enabling market entry to some of the top tier
                clients in the industry.
              </p>
            </div>
            <div>
              <h3>
                Training/Education for Consumer Awareness and Market Readines
              </h3>
              <p>
                Our unique strategies and approaches on consumer awareness and
                education continue to play a very instrumental role in unlocking
                Africa’s blockchain potential.
              </p>
              <p>
                We provide:
                <ul>
                  <li>
                    {" "}
                    A platform for budding developers, traders and investors to
                    nurture their skills and talents.{" "}
                  </li>
                  <li>
                    {" "}
                    Opportunities for potential partners to collaborate with
                    BitKE in equipping this platform with the necessary support
                    required.{" "}
                  </li>
                  <li>
                    {" "}
                    Tailor-made solutions to various target audiences and/or as
                    part of your market entry planning. Some of them include
                    product launches and activations.
                  </li>
                </ul>
              </p>
            </div>

            <div>
              <h3>Consumer engagement </h3>
              <p>
                At BitKe, we prioritize public engagement across the board. We
                leverage on this by offering our clients:
                <ul>
                  <li>Featured Posts;</li>
                  <li>Email Newsletters Sponsored Content; </li>
                  <li>Community management; </li>
                  <li>Website Banners; </li>
                  <li>Social Media Promotions and Mentions; </li>
                  <li>Video Promos; </li>
                  <li>Events Organizing and Management; </li>
                  <li>Talent and influencer engagement, </li>
                  <li>
                    Multicultural outreach and Content creation and distribution
                    across all platforms and channels to earn attention for your
                    brand/product.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Audience}>
        <div>
          <h3> For our Audiences: </h3>
          <p>We offer Cryptocurrency Education</p>
        </div>
        <div className={Styles.Aud}>
          <div className={Styles.Num1}>
            <h1>02</h1>
          </div>
          <div className={Styles.Numtxt}>
            <p>
              For many people in this landscape, their first interaction with
              blockchain/cryptocurrency begins with BitKE and its community. We
              offer regular free trainings on relevant topics. Audiences have
              free access to our past and future webinars and online events.
              <ul>
                <li>
                  Starting out? We know that it is often very difficult to
                  navigate and start your own investments effectively. Following
                  many requests, we have highlighted for you where to begin:
                </li>
                <li>What is a cryptocurrency? </li>
                <li>
                  Join the community for further interaction with other crypto
                  enthusiasts
                </li>{" "}
                tbd
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.Team}>
        <h3></h3>
        <img src="/team.svg"></img>
        <p>
          The BitKE team comprises versatile individuals from several fields and
          experiences. We have a solid technical foundation of blockchain
          fundamentals, blockchain development, and crypto trading. Our team
          also comprises videographer, writers, business development and
          marketing skillsets.
        </p>
      </div>

      <div className={Styles.Work}>
        <img src="/work.svg"></img>
        <p>We work with a span of organizations and individuals to deliver value including, but not limited, to: 
          <ul>
	<li>Crypto exchanges and platforms </li>
	<li>Media organizations </li>
	<li>Blockchain startups </li>
	<li>Government and Non-profits </li> 
	<li>Private institutions </li>
	<li>Blockchain and crypto influencers </li> 
	<li>Blockchain and crypto stakeholders </li>
	<li>Fintechs </li>
	<li>Crypto enthusiasts and newbies</li> 
</ul>
</p>
      </div>
      </Layout>
    </div>
  );
}

export default Portfolio;
