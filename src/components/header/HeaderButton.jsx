import React from "react"
import {Link} from "react-router-dom"

const HeaderButton = (props) => {
    return (
        <button onClick={props.onSelect} className={props.isSelected ? 'active' : undefined}>
            <Link to={props.hrefVal}><img src={props.imgUrl} className="w-8"/></Link>
            {/* <a href={props.hrefVal}>
                <img src={props.imgUrl} className="w-6"/>
            </a> */}
        </button>
    );
}

export default HeaderButton;