import React, { useContext } from "react";
import './TheLatest.css'
import { Store } from "./Data/DataBollywood";
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";



const TheLatestHollywood = () => {
    const [ContextHollywood] = useContext(Store)
    console.log(ContextHollywood)
    return (
        <div>

            <div className="Bollywood-item-Toppost">

                <div>
                    <h1 className="Name-Bollywood-heading">Hollywood</h1>
                    {ContextHollywood && ContextHollywood.filter((item) => item.Category === 'Hollywood').map((cat) => {
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
                    <img className="image-toppost-Bollywood" src='https://newsroompost.com/wp-content/uploads/2021/01/h-1.jpg' alt="Loading"></img>
                    <h1 className="Name-Bollywood-heading">Top Post</h1>
                    <div className="Bollywood-TopPost">

                        {ContextHollywood && ContextHollywood.filter((item) => item.Category === 'Hollywood').map((cat) => {
                            return (
                                
                                
                                    <div className="Bollywood-item" >
                                        <img className="Bollywood-image-toppost" src={cat.image} alt="Loading" />

                                        <div className="Bollywood-topost-heading">
                                            <Link to={`/NextPage/${cat.heading}`} state={cat} >
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
            <HomeFooter />
        </div>
    )
}
export default TheLatestHollywood