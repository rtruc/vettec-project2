import styled from "styled-components";
import { searchIcon } from "../../img/icons";


const SearchFormDiv = styled.form`
        /* margin-right: 10px; */
        display:flex;
        align-items:center;
`

const SearchField = styled.input`
    width: 10%;
    max-height:20px;
    display: block;
    border: none;
    background-color: rgba(248, 248, 248, 0);

    padding: 3px 5px;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;

    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: 19px;
    background-position: center;

    text-align: center;
        
    transition: width 0.4s ease-in-out,
        background-color 0.4s ease-in-out,
        border-color 0.4s ease-in-out,
        box-shadow 0.4s ease-in-out;

    margin-right: auto;
    margin-left: auto;

    &:hover {
        width: 100%;
        background-color: rgb(255, 255, 255);
        outline: none;
    }

    &:focus {
        background-image: none;
        background-color: rgb(255, 255, 255);
        width: 100%;
        outline: none;
        border-color: #ce61fd;
        box-shadow: inset 0 0 3px #7cb7e7;
        /* box-shadow: inset 0 0 3px #ce61fd; */
    }

    &::placeholder {
        color: rgba(188, 188, 188, 0);
        transition: color 0.4s ease-in-out;
    }
    &:hover::placeholder {
        color: rgb(251, 172, 255);
    }
    &:focus::placeholder {
        color: rgba(251, 172, 255, 0);
    }
`

export const SearchForm = () => {
    return (
        <>
            <SearchFormDiv action="https://google.com/search">
                <input type="hidden" name="sitesearch" value="https://rtruc.github.io/vettec-project1/" />
                <SearchField type="text" id="search" name="q" autoComplete="off" placeholder="search" />
            </SearchFormDiv>
        </>

    )
};