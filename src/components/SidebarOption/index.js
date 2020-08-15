import React from 'react';
import { SidebarOptionDiv } from './styles';

function SidebarOption({ title, Icon }) {
    return (
        <SidebarOptionDiv>
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </SidebarOptionDiv>
    )
}

export default SidebarOption;