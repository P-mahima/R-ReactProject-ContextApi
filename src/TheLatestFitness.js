import React, { useContext } from "react";
import './TheLatest.css'
import { Store } from "./Data/DataBollywood";
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";


const TheLatestFitness = () => {
    const [ContextFitness] = useContext(Store)
    console.log(ContextFitness)
    return (
        <div>
            
        <div className="Bollywood-item-Toppost">

            <div>
                <h1  className="Name-Bollywood-heading">Fitness</h1>
                {ContextFitness && ContextFitness.filter((item) => item.Category === 'Fitness').map((cat) => {
                    return (
                        <div className="Bollywood-item">
                            <img className="Bollywood-image" src={cat.image} alt="Loading" />

                            <div className="Bollywood-heading">
                                <Link to={`/NextPage/${cat.heading}`} state={cat} >
                                    <h2>{cat.heading}</h2>
                                </Link>
                                <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
            <img className="image-toppost-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHXx3vUi7dIQBmduWlv0AdqnbRuJRuEZV5yJLx-dOBcKCFB84qu3nlxvhA64uMO72h4A&usqp=CAU' alt="Loading"></img>
                <h1  className="Name-Bollywood-heading">Top Post</h1>
                <div className="Bollywood-TopPost">

                    {ContextFitness && ContextFitness.filter((item) => item.Category === 'Fitness').map((cat) => {
                        return (
                            <div className="Bollywood-item" >
                                <img className="Bollywood-image-toppost" src={cat.image} alt="Loading" />

                                <div className="Bollywood-topost-heading">
                                    <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                        <h2>{cat.heading}</h2>
                                    </Link>
                                    <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <HomeFooter/>
        </div>
    )
}
export default TheLatestFitness