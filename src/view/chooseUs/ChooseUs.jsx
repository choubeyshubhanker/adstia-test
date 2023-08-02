import Card from "../../components/Card/Card"
import "./ChooseUs.scss"
import {cardData} from "../../data"

const ChooseUs = () => {
  return (
    <>
<div className="container">
<div className="choose-left">
<div className="title-container chooseus-title">
<h3>Why Choose Us?</h3>
<h2>Why the industry <br/> chooses Clickdee?</h2>
</div>
<p>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
</div>
{/* <div class="choose-right"> */}
{
    cardData.map((item,i)=>(
        <Card key={i} areaClass= {item.areaClass} title = {item.title} subTitle={item.subTitle} paragraph={item.paragraph} />
    ))
}
    {/* <Card areaClass="card1"/>
    <Card areaClass="card2" />
    <Card areaClass="card3" />
    <Card areaClass="card4" />
    <Card areaClass="card5" /> */}

{/* </div> */}
</div>
</>
  )
}

export default ChooseUs