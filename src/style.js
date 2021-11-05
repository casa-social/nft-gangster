import Styled from 'styled-components';

const PurchaseStyle = Styled.div`
    padding-top: 100px;
    font-family: Montserrat, sans-serif;
    .image {
        .left-panel {
            img {
                width: 80%;
            }
        }
        .right-panel {
            padding-top: 40px;
            h1 {
                color: #dd2b37;
                font-size: 7em;
                line-height: 1;
                font-weight: bold;
            }
            h2 {
                color: #dd2b37;
                font-size: 3em;  
                font-weight: bold;
                
            }
        }
    }

    .introduction {
        flex-direction: row-reverse;
        .left-panel {
            ul {
                list-style: none;
                width: 60%;
                margin:0 auto;
                padding: 0;
                @media(max-width: 991px) {
                    width: 100%;
                }
                li {
                    margin: 35px 0;
                    a {
                        display: flex;
                        justify-content: space-between;
                        cursor: pointer;
                        span {
                            font-size: 20px;
                        }
                        svg {
                            font-size: 40px;
                        }
                        text-decoration: none;
                    }
                }
            }
        }
        .right-panel {
            margin-top: 35px;
        }
    }
    .purchase {
        .left-panel {
            h1 {
                margin-left: 20%;
                margin-top: 20px;
                margin-bottom: auto;
                padding-top: 40px;
                font-family: 'Akira expanded demo', sans-serif;
                font-size: 4.5em;
                text-transform: uppercase;
                font-weight: 900;
                line-height: 1;
                @media(max-width: 991px) {
                    margin-left: 0;
                    font-size: 4em;
                }
            }
        }
        .right-panel {
            >div {
                border: 1px solid #ff3154;
                border-radius: 10px;
                width: 80%;
                padding: 0 60px;
                margin-top: 50px;
                text-align: center;
                @media(max-width: 991px) {
                    width: 100%;
                    padding: 0 20px;
                }
                h3 {
                    display: flex;
                    align-items: center;
                    font-size: 22px;
                    font-family: Grifter, sans-serif;
                    font-weight: bold;
                    justify-content: center;
                    @media(max-width: 991px) {
                        font-size: 19px;
                    }
                    img {
                        width: 50px;
                        padding: 20px 0;
                        background-color:#ff3154;
                        border-bottom-right-radius: 20px; 
                        border-bottom-left-radius: 20px; 
                        @media(max-width: 991px) {
                            width: 40px;
                        }
                    }
                }
                .left-panel {
                    img {
                        width: 70%;
                        @media(max-width: 991px) {
                            width: 100%;
                        }
                    }
                    h4 {
                        font-size: 19px;
                        margin-top: 20px;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                }
                .right-panel {
                    h4 {
                        font-size: 19px;
                        font-weight: bold;
                        font-weight: bold;
                        @media(max-width: 991px) {
                            font-size: 15px;
                        }
                    }
                    input {
                        background-color: transparent;
                        border-color: white;
                        color: white;
                        margin-top: 20px;
                    }
                }
                .purchase-btn { 
                    width: 90%;
                    margin: 10px auto;
                    margin-bottom: 10px;
                    border-radius: 20px;
                    background-color: #ff3154;
                    box-shadow: 1px 1px 4px -1px #000;
                    font-family: 'Akira expanded demo', sans-serif;
                    text-align: center;
                    font-weight: bold;
                    text-transform: uppercase;
                    border: none;
                }
            }
        }
    }
    .description {
        width: 90%;
        margin: 50px auto 0;
        .title {
            img {
                width: 45px;
                margin-right: 20px;
            }
            font-weight: bold;
            background-repeat: repeat-y;
            font-family: 'Akira expanded demo', sans-serif;
            font-size: 3em;
        }   
        h3 {
            margin-top: 20px;
            font-family: Montserrat,sans-serif;
            font-size: 22px;
            line-height: 1.8;
        }
    }
    @media(max-width: 991px) {
        padding: 100px 30px;
            text-transform: uppercase;
    }
`;

const GangstersStyle = Styled.div`
    section {
        padding: 100px 5%;
        .title {
            img {
                width: 45px;
                margin-right: 20px;
            }
            font-weight: bold;
            background-repeat: repeat-y;
            font-family: 'Akira expanded demo', sans-serif;
            font-size: 3em;
        } 
        .row {
            margin-top: 30px;
        }
    }
`;

const KilocoinStyle = Styled.div`
section {
    padding: 100px 5%;
    .title {
        img {
            width: 45px;
            margin-right: 20px;
        }
        font-weight: bold;
        background-repeat: repeat-y;
        font-family: 'Akira expanded demo', sans-serif;
        font-size: 3em;
    } 
    .row {
        margin-top: 30px;
        img {
            margin-top: 100px;
        }
    }
}
`;

export {
    PurchaseStyle,
    GangstersStyle,
    KilocoinStyle,
};