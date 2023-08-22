import React from "react"
import * as styles from "./wanted.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// import { BsArrowRight } from "react-icons/bs"

const WantedPage = () => {
  const data = useStaticQuery(graphql`
    query getWantedImg {
      wantedBanner: file(relativePath: { eq: "wantedPage/wantedBanner.png" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedFirst: file(
        relativePath: { eq: "wantedPage/wantedFirstImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedSecond: file(
        relativePath: { eq: "wantedPage/wantedSecondImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedThird: file(
        relativePath: { eq: "wantedPage/wantedThirdImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedFourth: file(
        relativePath: { eq: "wantedPage/wantedFourthImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedFifth: file(
        relativePath: { eq: "wantedPage/wantedFifthImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedSixth: file(
        relativePath: { eq: "wantedPage/wantedSixthImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wantedSeventh: file(
        relativePath: { eq: "wantedPage/wantedSeventhImage.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={styles.wantedSection}>
      <div className={styles.bannerWrapper}>
        <Img
          fluid={data.wantedBanner.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.linkWrapper}>
          {/* <a href="" target="_blank" rel="noreferrer">
            Posetite Wanted Agency stranicu
          </a>
          <BsArrowRight size={25} color="red" /> */}
        </div>
        <p>
          Dugogodišnje odgajanje profesionalnih plesača, educiranje plesnih
          voditelja, aktiviranje djece i njegovanje ljubavi prema plesu kod
          rekreativaca, rezultiralo je stalnim rastom studija i širenjem na više
          grana.
        </p>
        <p>
          Polaznici svih dobnih skupina studio predstavljaju na poznatim plesnim
          produkcijama vlastite organizacije, kao i na državnim i međunarodnim
          natjecanjima. No, tu priča nije gotova. U suradnji s{" "}
          <span className={styles.greenTxt}>Wanted Agency Croatia</span>, plesni
          studio Escape predstavlja prepoznatljivu fuziju izvođača koja svaki
          događaj razlikuje od bilo kojeg drugog.
        </p>
        <Img
          fluid={data.wantedFirst.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <p>
          Naši vrhunski plesači i umjetnici vas vode u bijeg na{" "}
          <span className={styles.whiteTxt}>čarobno putovanje</span>{" "}
          nevjerojatnih, elegantnih i zabavnih pokreta okrunjenim{" "}
          <span className={styles.whiteTxt}>zapanjujućim kostimima</span> i
          pripadajućim <span className={styles.whiteTxt}>glazbenim notama</span>
          .
        </p>
        <p className={styles.italicTxt}>
          Ističemo se tematskim nastupima po državama i plesnim razdobljima:
        </p>
        <p className={styles.pointsTxt}>
          JAPAN · BOLLYWOOD · COUNTRY · KAN KAN · AFRIKA · PINUP ROCKABILLY ·
          70-e 80-e 90-e 00-e · ELVIS PRESLEY
        </p>
        <Img
          fluid={data.wantedSecond.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <p>
          Uz standardne kostime, vizualni dojam nastupa oplemenjuje ekskluzivna
          ponuda LED show krila i LED obruč uz bogate originalne brazilske
          perjanice, Las Vegas bijele perjanice te luksuzne kostime presvučene
          šljokicama i perjem.
        </p>
        <Img
          fluid={data.wantedThird.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <p>
          Bez daha ostavlja i naš cheerleading tim koji iza sebe ima pokoreno
          Europsko prvenstvo u rukometu, Europsko prvenstvo u košarci te puno
          međunarodnih utakmica i sportskih evenata.
        </p>
        <p>
          Nudimo i baletne nježne koreografije i kostime, ljubavne plesne parove
          s atraktivnim podizanjem plesačica u zrak (tzv. dance lifts) ili
          suvremeni ples, ovisno o profinjenosti eventa.
        </p>
        <Img
          fluid={data.wantedFourth.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <p>
          Iza sebe brojimo mnoge predivne projekte snimanja spotova, reklama,
          serija i filmova, koncertna iskustva, kazališne i hotelske predstave,
          sudjelovanje na korporativnim, sportskim i zabavnim eventima, kao i na
          privatnim zabavama.
        </p>
        <Img
          fluid={data.wantedFifth.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <p>Zavirite u suženi popis naših šarolikih projekata:</p>
        <h3>PREDSTAVE I FESTIVALI</h3>
        <ul>
          <li>„Magic act show“ / kazalište Kerempuh (koreograf i plesač)</li>
          <li>„Fame“ / Nizozemska (asistent koreografa)</li>
          <li>„Cabaret“ Bob Fosse / Ljubljana (asistent koreografa)</li>
          <li>plesna predstava 'Postelja' (plesač)</li>
          <li>TREPS 2010. /2011. (koreograf)</li>
          <li>plesna predstava 'Free your mind' (plesač)</li>
          <li>show sa Iluzionistom Lukom Vidović (koreograf)</li>
          <li>Escape show / Istra turist 2010.g. (koreograf)</li>
          <li>Beetlejuice show / Sol Melia 2011.g (koreograf)</li>
          <li>Splitski Festival 2009. (koreograf)</li>
          <li>Hrvatski radijski festival 2008./ 2009.g. (koreograf)</li>
          <li>Festival „Sunčane skale“ / Crna gora (koreograf i plesač)</li>
          <li>Festival „Vodice“ (koreograf)</li>
          <li>ESDU 2012. / 2 zlatne i 2 srebrne medalje (koreograf)</li>
          <li>
            DANCE FEST NOVI SAD 2013. / 2 zlatne i 1 srebrna medalja (koreograf)
          </li>
        </ul>
        <h3>TELEVIZIJSKI PROJEKTI</h3>
        <ul>
          <li>
            Dora 2004./ 2006./ 2010. / HRT (koreograf i plesač) • Eurosong 2010.
            / Norveška / Feminem (koreograf i plesač)
          </li>
          <li>Novogodišnji program HRT-a 2004./2005./2009. (plesač)</li>
          <li>Farma 2009. / Nova TV (koreograf i plesač)</li>
          <li>HTZ 2009./ RTL televizija (koreograf i plesač)</li>
          <li>Evergreen 2010./ HRT (koreograf i plesač)</li>
          <li>Država, selo, grad 2010./ HRT (koreograf)</li>
          <li>Severina u Beogradu / Operacija Trijumf (koreograf)</li>
          <li>Asian beach games 2010. / Oman (plesač)</li>
          <li>Super talent 2011. / Nova TV (plesač)</li>
          <li>Dani hrvatskog turizma 2011./ Šibenik (koreograf)</li>
          <li>
            Svjetsko prvenstvo u rukometu na pijesku 2011./ Umag (koreograf)
          </li>
        </ul>
        <Img
          fluid={data.wantedSixth.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <h3>KONCERTI I SPOTOVI</h3>
        <ul>
          <li>Nina Badrić 2005./ Dom sportova Zagreb (plesač)</li>
          <li>Severina u suradnji sa Karlovačkom pivovarom 2005.g (plesač)</li>
          <li>Lana Jurčević 2009./Cibona Zagreb (plesač i koreograf)</li>
          <li>Toni Cetinski „Furija tour“ 2008. - 2010. (plesač)</li>
          <li>Lana Jurčević / spot (plesač)</li>
          <li>Miroslav Škoro / spot (koreograf i plesač)</li>
          <li>Magnetic / spot (koreograf i plesač)</li>
          <li>Prva liga / spot (koreograf i plesač)</li>
          <li>Les i Kandžija / spot (koreograf i plesač)</li>
          <li>Pamela Ramljak / spot (koreograf i plesač)</li>
          <li>Vanna / spot (koreograf) </li>
          <li>James Perr & Eric Destler / spot (koreograf)</li>
          <li>Dance studio Escape / spot (koreograf) </li>
        </ul>
        <h3>REVIJE</h3>
        <ul>
          <li>Zlatna igla 2007./ HRT (koreogaf)</li>
          <li>Puma / revija za sportsku odjeću i obuću (koreogaf)</li>
          <li>salon Renata / revija frizura 2006. (koreograf)</li>
          <li>salon „Lidija“ / revija frizura (koreograf)</li>
          <li>Nivea / gloss diamonds revija (plesač)</li>
          <li>
            HNK Osijek / revija za pomoć Udruzi pasa za razminiravanje
            (koreograf i plesač)
          </li>
          <li>Keune / hair revija 2014. (koreograf)</li>
        </ul>
        <Img
          fluid={data.wantedSeventh.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <h3>REKLAME</h3>
        <ul>
          <li>T-mobile 2004. (asistent koreografa)</li>
          <li>T-com 2010. (koreograf)</li>
          <li>T-mobile 2011. (koreograf)</li>
          <li>ERO NET / mobilna mrežu za Bosansko tržište (koreograf)</li>
          <li>Badel 2010. (koreograf)</li>
          <li>RBA 2021.</li>
          <li>Sber banka 2021.</li>
          <li>McDonalds 2021.</li>
          <li>Perutnina Ptuj 2021.</li>
          <li>PSK Casino 2022.</li>
          <li>Lelo 2022.</li>
          <li>Coca-cola 2022.</li>
        </ul>
        <h3>EVENTI</h3>
        <ul>
          <li>teniski turnir PBZ INDOORS / otvorenje</li>
          <li>kompleks hotela Solaris / eventi</li>
          <li>Autoshow 2008./ nastup za Renault</li>
          <li>Dani hrvatskog turizma 2011./ otvorenje</li>
          <li>Hyppo banka / otvorenje podružnice Osijek</li>
          <li>Red Bull / eventi</li>
          <li>Keune / event</li>
          <li>Uniqa osiguranje / event</li>
          <li>Ledo / 50 godina tvrtke</li>
          <li>tvrtka Vaillant / event</li>
          <li>kongres ginekologa na Brijunima 2009.</li>
          <li>trgovački centar Mandi / Valentinovo event</li>
          <li>Renault/ prezentacija nove Lagune u Hippo centru</li>
          <li>časopis Sensa / event</li>
          <li>nastupi uz Lanu Jurčević</li>
          <li>
            brojni nastupi uz Tarika Filipovića, Renea Bitorajca i Luku Vidovića
          </li>
          <li>24 sata / event</li>
        </ul>
      </div>
    </section>
  )
}

export default WantedPage
