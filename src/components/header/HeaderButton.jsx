// import React from "react"

const HeaderButton = ({children, onSelect}) => {
    return (
        <button onClick={onSelect}>
            {/* <a href={children.hrefVal}>
                <img src={children.imgUrl} className="w-6"/>
            </a> */}
        </button>
    );
}

export default HeaderButton;