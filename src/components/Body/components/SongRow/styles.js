import styled from 'styled-components';

export const SongRowDiv = styled.div`
    margin-left: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    color: white;

    :hover {
        cursor: pointer;
        background-color: black;
        opacity: 0.8;
    }
`; 

export const SongRowInfo = styled.div`
    margin-left: 20px;
    text-align: left;

    h1 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
        margin-top: 3px;
        color: gray;
    }
`;

export const SongRowAlbumImage = styled.img`
    height: 40px;
    width:40px;
`