import styled from "styled-components";

const StyledOrganizer = styled.div`
  h2 {
    color: #4f4f4f;
    font-weight: 800;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 10%;
    border-bottom: 0.125em solid #1db954;
    display: inline-block;
    letter-spacing: 0.125em;
  }

  & input {
    width: ;
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
    width: 10 rem;
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
  & .form-box {
    margin-left: auto;
    margin-right: auto;
    width: 16em;
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
