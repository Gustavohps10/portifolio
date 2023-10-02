import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
    $fillType: "outline" | "filled"
    $textColor?: string
    $hoverTextColor?: string
    $backgroundColor?: string
    $hoverBackgroundColor?: string
    $borderColor?: string
}

const sharedStyle = css<ButtonProps>`
    position: relative;
    font-size: 16px;
    transition: all .2s linear;
    color: ${props => props.$textColor ? props.$textColor : props.theme.colors.text };
    border: 1px solid ${props => props.$borderColor ? props.$borderColor : "transparent"};
    width: 200px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    background-color: ${props => props.$fillType === "outline" ? "transparent" : props.$backgroundColor};
    cursor: pointer;
    border-radius: 5px;

    .icon{
        height: 28px;
    }

    &.centralized{
        left: 50%;
        transform: translateX(-50%);
    }

    &.center

    &.small{
        padding: 5px 15px;
        font-size: 14px;
        width: auto;

        .icon{
            height: 24px;
        }
    }

    &:hover{
        color: ${props => props.$hoverTextColor ? props.$hoverTextColor : props.theme.colors.text };
        background: ${props => props.$hoverBackgroundColor ? props.$hoverBackgroundColor : props.theme.colors.primary};
        border-color: ${props => props.$hoverBackgroundColor ? props.$hoverBackgroundColor : props.theme.colors.primary};
    }

    @media (max-width: 800px){
        &.centralized-md{
            left: 50%;
            transform: translateX(-50%);
        }
    }
`

const Button = styled.button<ButtonProps>`
    ${sharedStyle}
`;

const StyledLink = styled(Link)<ButtonProps>`
    ${sharedStyle}
`;

export {Button, StyledLink}