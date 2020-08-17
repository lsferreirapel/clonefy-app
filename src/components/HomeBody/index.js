import React from 'react';

import Header from '../Header';
import { HomeBodyDiv, HomeBodyContent } from './styles';

function HomeBody() {
    return (
        <HomeBodyDiv>
            <Header />
            <HomeBodyContent />
        </HomeBodyDiv>
    )
} 

export default HomeBody;