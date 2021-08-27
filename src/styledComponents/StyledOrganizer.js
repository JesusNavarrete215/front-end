import styled from "styled-components";

const StyledOrganizer = styled.div`
  width: 100%;

  & .content-box{
    width: 100%;
  }

  & .content-box .form-box{
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: #4f4f4f;
    width: 100%;
    font-weight: 800;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 5%;
    margin-top: 5%;
    border-bottom: 0.125em solid #1db954;
    display: inline-block;
    letter-spacing: 0.125em;
  }

  & input {
    width: 100%;
    outline: none;
    font-weight: 100;
    border: 0.125em solid #4f4f4f;
    font-size: 1.25rem;
    color: #4f4f4f;
    background: transparent;
    border-radius: 2em;
    -webkit-transition: all ease-in 0.1s;
    transition: all ease-in 0.1s;
  }

  & button {
    width: 100%;
    padding: 0.25rem 1rem;
    outline: none;
    font-weight: 800;
    outline: none;
    border: none;
    font-size: 1.125rem;
    letter-spacing: 0.05em;
    color: white;
    background: #1db954;
    border-radius: 2em;
    cursor: pointer;
  }

  span {
    font-size: 1rem;
    margin-bottom: 2.5%;
    display: inline-block;
    color: black;
    font-weight: 400;
    letter-spacing: 0.125em;
  }

  button {
    margin-top: 10px;
  }
`;
export default StyledOrganizer;
