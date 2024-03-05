import React, {useState} from "react"
import HeaderButton from "./header/HeaderButton";
import { HeaderBttonsInfo } from "../constants/data";

const HeaderMenu = () => {
    const [headerBtnSelected, setHeaderBtnSelected] = useState(0);

    const handleHeaderBtn = (selectedBtn) => {
        console.log(HeaderBttonsInfo);
        console.log("btn " + selectedBtn);
        setHeaderBtnSelected(selectedBtn);
    };

    return (
        <menu className="flex flex-wrap justify-evenly border-b pb-4">
            {/* <button>
                <a href="/articles">
                    <img src="/img/arrow/arrow_left.png" className="w-6"/>
                </a>
            </button> */}
            <HeaderButton onSelect={() => handleHeaderBtn("1")}></HeaderButton>
            <HeaderButton onSelect={() => handleHeaderBtn("2")}></HeaderButton>
            <HeaderButton onSelect={() => handleHeaderBtn("3")}></HeaderButton>
            {/* {
                HeaderBttonsInfo.length && (
                    <H></H>
                )
            } */}
        </menu>
    )
}

export default HeaderMenu;