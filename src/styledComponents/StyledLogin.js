import styled from "styled-components";

const StyledLogin = styled.div`
    position: relative;
    width: 100%;
    height: 95vh;
    display: flex;

    & .img-box{
        position: relative;
        width: 50%;
        height: 100%;
    }

    & .img-box::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(-45deg, black, lightgrey); */
        mix-blend-mode: screen;
        z-index: 1;
    }

    & .img-box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    & .content-box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }

    & .content-box .form-box{
        width: 50%;
    }

    & .content-box .form-box h2{
        color: #4f4f4f;
        font-weight: 800;
        font-size: 1.5em;
        text-transform: uppercase;
        margin-bottom: 10%;
        border-bottom: 0.125em solid #1DB954;
        display: inline-block;
        letter-spacing: 0.125em;
    }

    & .content-box .form-box .input-box{
        margin-bottom: 5%;
    }

    & .content-box .form-box .input-box span{
        font-size: 1rem;
        margin-bottom: 2.5%;
        display: inline-block;
        color: black;
        font-weight: 400;
        letter-spacing: 0.125em;
    }

    & .content-box .form-box .input-box input{
        width: 100%;
        padding: 2% 5%;
        outline: none;
        font-weight: 500;
        border: 0.125em solid #4f4f4f;
        font-size: 1.25rem;
        color: #4f4f4f;
        background: transparent;
        border-radius: 2em;
        transition: all ease-in .10s;

        &:focus{
            border: 0.125em solid #1DB954;
        }
    }

    & .content-box .form-box .input-box button{
        width: 100%;
        padding: 2% 5%;
        outline: none;
        font-weight: 800;
        outline: none;
        border: none;
        font-size: 1.125rem;
        letter-spacing: 0.05em;
        color: white;
        background: #1DB954;
        border-radius: 2em;
        cursor: pointer;

        &:hover{
            background: #1ed760;
        }
    }

    & .content-box .form-box .remember{
        margin-bottom: 5%;
        color: #4f4f4f;
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
    }

    & .content-box .form-box .input-box p{
        color: #4f4f4f;
        text-align: center;
    }

    & .content-box .form-box .input-box p a{
        color: #1DB954;
    }
`
export default StyledLogin;