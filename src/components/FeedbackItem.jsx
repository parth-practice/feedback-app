import { useState } from "react"

function FeedbackItem({item}) {
    return (
        <div className="card">
            <div className="num-display">{ item.rating }</div>
            <div className="text-display">{ item.text }</div>
            {/* <button onClick={handleClick}>Hello</button> */}
        </div>
    )
}

export default FeedbackItem
