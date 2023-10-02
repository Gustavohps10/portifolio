import styled from "styled-components";

const Section = styled.section`
    &#home{
        display: flex;

        aside{
            color: #fff;
            padding: 40px;
            flex: 10;
            background-color: #8257e6;

            display: flex;
            justify-content: center;
            align-items: center;

            .introduction{
                width: 90%;
            
                h1{
                    font-size: 4rem;
                    line-height: 3.5rem;
                }

                h2{
                    line-height: 65px;
                    font-size: 4.2rem;
                }

                .Typewriter{
                    margin-top: 15px;
                    font-size: 30px;
                    min-height: 70px;
                }

            }
        
        }

        > div{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.title === "dark" ? "#0e0e0e" : "#fff"};
            flex: 7;
            padding-right: 40px;

            img{
                width: 90%;
            }
        }
    }

    &#about{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 15px;
        flex-wrap: wrap;
        padding: 40px;
        
        img{
            width: 40%;
            min-width: 250px;
        }

        .content{
            color: ${props => props.theme.colors.text};
            width: 400px;

            h1{
                font-size: 50px;
                color: ${props => props.theme.colors.text};
            }

            p{
                margin-bottom: 10px;
            }
        }
    }

    &#skills{
        background-color: ${props => props.theme.colors.tertiary};
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 40px;
        
        img{
            width: 40%;
        }

        .content{
            h1{
                font-size: 50px;
                color: #fff;
            }

            color: #fff;
            width: 400px;

            .technologies{
                margin: 30px 0;
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;

                .tech{
                    height: 40px;
                    width: 40px;
                    color: #fff;
                    fill: #fff;
                }
            }
        }
    }

    &#contact{
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 50px;
            text-align: center;
            color: ${props => props.theme.colors.text};
        }
        
        form{
            margin: 0 auto;
            max-width: 600px;

            input, textarea{
                &::placeholder{
                    color: #a9a9a9;
                }

                font-size: 18px;
                color: ${props => props.theme.colors.text};
                outline: none;
                width: 100%;
                border: 0;
                border-bottom: 1px solid ${props => props.theme.colors.text};
                background-color: transparent;
                resize: none;
                padding: 5px;
            }

            label{
                display: block;
                margin-top: 20px;
                color: #7f7f7f;
            }

        
        }
    }

    &#social{
        background-color: #6421ff;
        padding: 40px;
        filter: brightness(0.8);

        > div{
            padding-top: 50px;
            display: flex;
            flex-wrap: wrap;
            height: 70%;
            gap: 30px;
            align-items: center;
        
            ul{
                min-height: 150px;
                font-size: 20px;
                list-style: none;
                color: #fff;

                .title{
                    color: #d1d1d1;
                }

                a{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #fff;
                    text-decoration: none;
                    

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
        
        span{
            margin-top: 10px;
            display: block;
            width: 100%;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
    }

    &#projects{
        position: relative;
        padding: 120px;
        color: ${props => props.theme.colors.text};

        h1{
            text-align: center;
            font-size: 50px;
            color: ${props => props.theme.colors.text};
        }

        h2{
            text-align: center;
            color: #717171;
            font-weight: 400;
        }

        .box-container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            justify-content: center;
            gap: 20px;
            margin-top: 100px;
            padding: 0px 12px;

            .box{
                overflow: hidden;
                position: relative;
                background-color: ${props => props.theme.colors.background};
                box-shadow: -1px 1px 7px #00000052;
                transition: all .2s linear;
                cursor: pointer;
                min-height: 300px;

                img{
                    width: 100%;
                    height: 170px;
                    object-fit: cover;
                    transition: all .2s linear;
                }

                .content{
                    margin-top: -7px;
                    padding: 8px;

                    span{
                        font-weight: 600;
                        font-size: 18px;
                        display: block;
                        margin-bottom: 3px;
                    }

                    .description{
                        font-size: 13px;
                        color: #717171;
                        margin: 5px 0;
                    }  
                }

                &:hover{
                    transform: translateY(-10px);
                    img{
                        filter: brightness(0.6);
                    }
                } 
            }

            &::-webkit-scrollbar {
                width: 15px;
                height: 15px;
                background-color: rgb(0, 0, 0, 28%);
                border-radius: 10px;
            
            }
            
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background-color: rgba(100, 100, 100, 0.49);
                background-color: #4e4e4ecf;
                border: 3px solid transparent;
                background-clip: content-box;
            }
        }
    }

    @media (max-width: 800px){
        &#home{
            flex-wrap: wrap;
            margin-top: 60px;
            height: auto;

            aside{
                flex: none;
                width: 100%;
                min-height: 60vh;
                padding: 80px 40px;

                .introduction{
                    margin-top: 40px;
                    width: 100%;

                    h1{
                        font-size: 2.8rem;
                        line-height: 3.2rem;
                        text-align: center;
                    }

                    h2{
                        font-size: 3rem;
                        line-height: 50px;
                        text-align: center;
                    }

                    .Typewriter{
                        font-size: 25px;
                        text-align: center;
                    }
                }
                
            }

            > div{
                padding: 20px;
                flex: none;
                width: 100%;
                min-height: 250px;

                img{
                    position: relative;
                    right: 0;
                    margin: 0 auto;
                    width: 45%;
                    min-width: 250px;
                }
            }
        }

        &#about{
            padding: 80px 40px;
            flex-direction: column-reverse;
            gap: 40px;

            > img{
                min-width: 200px;
            }

            .content{
            
                text-align: center;
                h1{
                    font-size: 40px;
                }                
            }
        }

        &#skills{
            padding: 80px 40px;

            .content{
                text-align: center;
            }

            > img{
                display: none;
            }
        }

        &#contact{
            padding: 80px 40px;

            h1{
                font-size: 40px;
            }
        }
        
    }

    @media (max-width: 570px){
        &#home{
            aside{

                .introduction{
                    h1{
                        font-size: 2.6rem;
                    }

                    h2{
                        line-height: 45px;
                        font-size: 2.8rem;
                    }
        
                    .Typewriter{
                        font-size: 22px;
                    }
                }

                img{
                    margin-top: 50px;
                }
            }
        }

        &#social{
            div ul{
                min-height: auto;
            }
        }
    }

    @media (max-width: 470px){
        &#home{
            aside{

                .introduction{
                    h1{
                        font-size: 2.2rem;
                        line-height: 3rem;     
                    }

                    h2{
                        line-height: 40px;
                        font-size: 2.5rem;
                    }
        
                    .Typewriter{
                        font-size: 20px;
                    }
                }

                img{
                    margin-top: 90px;
                }
            }
        }  

        &#about{
            .content{
                width: auto;
            }
        }
        
        &#skills{
            .content{
                h1{
                    font-size: 40px;
                    text-align: center;
                }

                p{
                    text-align: center;
                }

                .technologies{
                    justify-content: center;
                    margin-top: 10px;
                }
            }
        }

        &#contact{
            h1{
                font-size: 28px;
            }
        }

        &#social{
            .my-email{
                font-size: 18px;
            }
        }
    }

    @media (max-width: 385px){

        &#home{
            aside{

                .introduction{
                    h1{
                        font-size: 2rem;
                    }

                    h2{
                        line-height: 40px;
                        font-size: 2.2rem;
                    }
        
                    .Typewriter{
                        font-size: 18px;
                    }
                }
            }
        }

        &#skills{
            .content{
                .technologies{
                    justify-content: center;
                    margin-top: 10px;
                    .tech{
                        width: 35px;
                        height: 35px;
                    }
                }
            }
        }

    }
`;

export default Section