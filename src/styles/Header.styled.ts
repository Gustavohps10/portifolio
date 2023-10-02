import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 20px;
    width: 100vw;
    height: 60px;
    padding: 0 50px;
    color: #fff;
    z-index: 9997;
    pointer-events: none;

    .logo{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
        color: #fff;
        width: 150px;
        height: 60px;
    }

    nav{
        background-color: ${props => props.theme.colors.navbar};
        transform: scale(0.3);
        transform-origin: top right;
        position: absolute;
        right: 35px;
        top: 2px;
        width: 305px;
        min-height: 400px;
        box-shadow: -1px 1px 7px #00000052;
        padding: 30px;
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;

        ul{
            list-style: none;
            li{
                margin-top: 15px;
                a{
                    position: relative;
                    color: ${props => props.theme.colors.text};
                    text-decoration: none;
                    font-size: 20px;
                    transition: all .2s linear;

                    .icon{
                        margin-right: 5px;
                    }
        
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: -8px;
                        left: 0;
                        background-color: ${props => props.theme.colors.primary};
                        width: 0px;
                        height: 4px;
                        transition: all .2s linear;
                    }
                    
                    &:hover{
        
                        &::after{
                            width: 100%;
                        }
                    }
                }
            }
        }        

        &.active{
            pointer-events: all;
            transform: scale(1);
            opacity: 1;
        }
    }

    button{
        pointer-events: all;
        z-index: 1001;
        top: 50%;
        transform: translateY(-50%);
        float: right;
        width: 30px;
        position: relative;
        height: 30px;
        border: 0;
        cursor: pointer;
        background: none;
        outline: none;

        &.light{
            &::before, &::after{
                background-color: #fff;
            }
        }

        &::before, &::after{
            content: '';
            height: 2px;
            position: absolute;
            -webkit-transition: 0.2s ease;
            transition: 0.2s ease;
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
            background-color: #8257e6;
        }

        &::before{
            top: 6px;
            left: 0;
            width: 100%;
        }

        &::after{
            right: 0;
            width: 72%;
            top: 18px;
        }

        &.active{
            &::after{
                background-color: #8257e6;
                top: 15px;
                width: 100%;
                transform: rotate(-45deg);
            }

            &::before{
                background-color: #8257e6;
                top: 15px;
                width: 100%;
                transform: rotate(45deg);
            }
        }
    }

    .switch-theme{
        pointer-events: all;
        position: relative;
        z-index: 1001;
        top: 50%;
        transform: translateY(-50%) rotate(40deg) !important;
        float: right;
        right: 14px;
    }

    hr{
        border: none;
        height: 1px;
        background: #717171;
        margin: 25px 0;
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        a{
            color: #fff;
            text-decoration: none;
        }

        .tag{
            display: flex;
            cursor: pointer;

            .icon{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color:  ${props => props.theme.colors.primary};
                width: 25px;
                height: 25px;

                > svg{
                    width: 15px;
                }
            }

            span{
                color:  ${props => props.theme.colors.text};
                background-color:  ${props => props.theme.colors.background};
                display: flex;
                align-items: center;
                font-size: 12px;
                padding: 0 5px;
            }
        }
    }
    
    @media (max-width: 800px){
        top: 0px;
        padding: 0 25px;
        background-color: ${props => props.theme.colors.background};

        .logo svg g{
            stroke: ${props => props.theme.colors.text};
            fill: ${props => props.theme.colors.text};
        }

        nav{
            width: 265px;
            top: 0px;
            right: 0px;
            height: 100vh;
            transform: translateX(100%) !important;
            opacity: 1;

            &.active{
                transform: translateX(0) !important;
            }
        }

        button{
            &::before, &::after{
                background-color: ${props => props.theme.colors.text};
            }
        }

        .tags{
            a{
                display: contents;
            }

            .tag{
                padding: 5px;
                border-radius: 2px;

                .icon{
                    width: 30px;
                    height: 30px;
                    border-radius: 2px;
                    
                    > svg{
                        width: 25px;
                    }
                }
                width: 100%;
                span{
                    background-color: transparent;
                    font-size: 15px;
                }

                &:hover{
                    background-color:  ${props => props.theme.colors.background};
                }
            }
        }
    }

    @media (max-width: 570px){
        .logo{
            width: 120px;
        }
    }
`;

export default Header
