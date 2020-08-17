import styled from 'styled-components';

export const HomeBodyDiv = styled.div`
    padding: 10px;
    flex: 0.8;
    height: 100vh;
    color: white;
    overflow-y: overlay;
    background: linear-gradient(#292429, rgba(0, 0, 0, 1));

    ::-webkit-scrollbar{
        display: none
    }
`
export const HomeBodyContent = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
`