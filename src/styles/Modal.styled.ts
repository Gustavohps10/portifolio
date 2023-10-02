import styled from "styled-components";
import Modal from "react-modal"

const ModalStyled = styled(Modal).attrs({
    style: {
        overlay:{
            zIndex: 9998,
            backgroundColor: "#000000e8"
        }
}})`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${props => props.theme.colors.background};
    box-shadow: -1px 1px 20px 7px #00000050;
    max-height: 90vh;
    max-width: 90vw;
    width: 600px;
    border-radius: 5px;
    border: none;
    outline: none;
    transform: translate(-50%, -50%);
    transition: all .3s ease;
    z-index: 99999;
    padding: 20px;
    color: ${props => props.theme.colors.text};
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 15px;
        height: 15px;
        background-color: rgb(0, 0, 0, 28%);
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(100, 100, 100, 0.49);
        background-color: #515151;
        border: 3px solid transparent;
        background-clip: content-box;
    }

   
    .main-image{
        margin-top: 10px;
        width: 100%;
    }

    h1{
        font-size: 22px;
    }

    p{
        font-size: 16px;
        line-height: 20px;
        color: #717171;
        margin: 16px 0;
    }

    .shields-containter{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        img{
            height: 24px;
        }
    }

    hr{
        border: 0;
        height: 1px;
        background: #717171;
        margin: 15px 0;
    }

    footer{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`;

export default ModalStyled