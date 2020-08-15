import Logo from '../../assets/img/clonefy/clonefy-white-com-logo.png';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from '../SidebarOption';
import React from 'react';

import { useDataLayerValue } from '../../data/DataLayer';
import { SideBarDiv, SideBarTitle, WhiteLogo, SideBarLine } from './styles';

function SideBar() {
    const [{ playlists }, dispach] = useDataLayerValue();

    return (
        <SideBarDiv>
            <WhiteLogo src={Logo}/>

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <SideBarTitle>PLAYLISTS</SideBarTitle>
            <SideBarLine />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

        </SideBarDiv>
    )
}

export default SideBar;