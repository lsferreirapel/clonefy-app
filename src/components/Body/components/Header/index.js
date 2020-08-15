import React from 'react';

import { HeaderDiv, HeaderLeft, HeaderRight } from './styles';

import { useDataLayerValue } from '../../../../data/DataLayer';

// Icons import
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    const [{ user , dispatch}] = useDataLayerValue();

    return (
        <HeaderDiv>
            <HeaderLeft>
                <SearchIcon/>
                <input placeholder="Busque artistas, músicas ou podcasts" type="text"/>

            </HeaderLeft>

            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt="LF"/>
                <h4>{user?.display_name}</h4>
            </HeaderRight>
        </HeaderDiv>
    )
}

export default Header;