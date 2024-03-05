import React, {useState} from "react"
import HeaderButton from "./header/HeaderButton";
import { HeaderButtonsInfo } from "../constants/data";

const HeaderMenu = ({menuButton}) => {
    const [headerBtnSelected, setHeaderBtnSelected] = useState(menuButton);

    const handleHeaderBtn = (selectedBtn) => {
        setHeaderBtnSelected(selectedBtn);
    };

    return (
        <menu id="headerMenu" className="flex flex-wrap justify-evenly border-b pb-4">
            {
                HeaderButtonsInfo.length && (
                    HeaderButtonsInfo.map((btnInfo) => {
                        return (
                            <HeaderButton 
                                onSelect={() => handleHeaderBtn(btnInfo.id)}
                                isSelected={headerBtnSelected === btnInfo.id}
                                key={btnInfo.id}
                                hrefVal={btnInfo.hrefVal}
                                imgUrl={btnInfo.imgUrl}
                            />
                        )
                    })
                )
            }
        </menu>
    )
}

export default HeaderMenu;