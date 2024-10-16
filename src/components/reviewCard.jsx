import React from "react";


function Reviewcard(props){

return (
        <>
    <p>Stars for reviewing</p>
    <p>{props.desc}</p>
            <div>

                <div><img src={props.profpic} /></div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.role}</p>
                </div>
            </div>

    </>
    )
}


export default Reviewcard
