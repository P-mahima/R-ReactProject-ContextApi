import React, { useContext } from "react";
import './TheLatest.css'
import { Store } from "./Data/DataBollywood";
import { Link } from "react-router-dom";
// import NextPage from "./NextPage";




const TheLatestFood = () => {
    const [ContextFood] = useContext(Store)
    console.log(ContextFood)
    return(
        <div className="Bollywood-item-Toppost">
                     
            <div>
                <h1  className="Name-Bollywood-heading">Food</h1>
                {ContextFood && ContextFood.filter((item)=> item.Category === 'Food').map((cat)=>{
                    return(
                        <div className="Bollywood-item">
                        <img className="Bollywood-image" src={cat.image} alt="Loading" />

                        <div className="Bollywood-heading">
                            <Link  to={`/NextPage/${cat.heading}`} state={cat} >
                        <h2 >{cat.heading}</h2>
                            </Link>
                        <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                        </div>
                        </div>
                    )
                })}
            </div>
            <div>
            <img className="image-toppost-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQiaHuEfKqQ_ZG2uydfL2ty6PhzLnDLt9B78RMGwFLCyJwkQE4lRkvQrOWDHFpYVfd1A&usqp=CAU' alt="Loading"></img>
                <h1  className="Name-Bollywood-heading">Top Post</h1>
                <div className="Bollywood-TopPost">

                {ContextFood && ContextFood.filter((item) => item.Category === 'Food').map((cat) => {
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
    )
}
export default TheLatestFood