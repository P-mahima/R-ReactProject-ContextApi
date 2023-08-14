import React, { useContext } from "react";
import './TheLatest.css'
import { Store } from "./Data/DataBollywood";
import { Link } from "react-router-dom";



const TheLatestTech = () => {
    const [ContextTech] = useContext(Store)
    console.log(ContextTech)
    return(
        <div className="Bollywood-item-Toppost">
                     
            <div>
                <h1 className="Name-Bollywood-heading" >Technology</h1>
                {ContextTech && ContextTech.filter((item)=> item.Category === 'Technology').map((cat)=>{
                    return(
                        <div>
                            <div className="Bollywood-item">
                            <img className="Bollywood-image" src={cat.image} alt="Loading" />
    
                            <div className="Bollywood-heading">
                                <Link to={`/NextPage/${cat.heading}`} state={cat}>
                            <h2>{cat.heading}</h2>
                                </Link>
                            <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                            </div>
                            </div>
                            {/* <hr></hr> */}
                        </div>
                    )
                })}
            </div>
        
            <div>
            <img className="image-toppost-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhlV9pYvmcFyL0Dd-ohN1cvg1K3CTD8c3gw&usqp=CAU' alt="Loading"></img>
                <h1 className="Name-Bollywood-heading">Top Post</h1>
                <div className="Bollywood-TopPost">

                {ContextTech && ContextTech.filter((item)=> item.Category === 'Technology').map((cat)=>{
                    return(
                        <div>

                            <div className="Bollywood-item">
                            <img className="Bollywood-image-toppost" src={cat.image} alt="Loading" />
    
                            <div className="Bollywood-topost-heading">
                                <Link to={`/NextPage/${cat.heading}`} state={cat}>
                            <h2>{cat.heading}</h2>
                                </Link>
                            <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                            </div>
                            </div>
                            {/* <hr/> */}
                        </div>
                    )
                })}
                </div>
           
            </div>
        </div>
    )
}
export default TheLatestTech