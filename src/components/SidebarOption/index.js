import React from 'react';

import { NavLink } from 'react-router-dom';
import { SidebarOptionDiv } from './styles';

function SidebarOption({ title, Icon, to }) {
    return (
        <SidebarOptionDiv>
            {Icon && <Icon className="sidebarOption_icon"/>}
    {Icon ? <NavLink to={to} className="nav-option" >{title}</NavLink> : <NavLink to={to} className="playlist-name">{title}</NavLink>}
        </SidebarOptionDiv>
    )
}

export default SidebarOption;