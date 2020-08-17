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

            <SidebarOption Icon={HomeIcon} title="Home" to="/" />
            <SidebarOption Icon={SearchIcon} title="Search" to="/" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" to="/" />
            
            <br />
            <SideBarTitle>PLAYLISTS</SideBarTitle>
            <SideBarLine />

            {playlists?.items?.map(playlist => (
                <SidebarOption to={`/playlist/${playlist.id}`} title={playlist.name} key={playlist.id}/>
            ))}

        </SideBarDiv>
    )
}

export default SideBar;