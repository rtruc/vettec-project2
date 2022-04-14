import styled from "styled-components";


export const SearchForm = () => {

    const SearchForm = styled.form`
            margin-right: 10px;
    `

    const SearchField = styled.input`
        width: 10%;
        display: block;
        border: none;
        background-color: rgba(248, 248, 248, 0);

        padding: 6px 5px;
        border-radius: 5px;
        font-family: 'Lato', sans-serif;

        background-image: url('/img/icons/searchicon.png');
        background-repeat: no-repeat;
        background-size: 19px;
        background-position: left;

        transition: width 0.4s ease-in-out,
            background-color 0.4s ease-in-out,
            border-color 0.4s ease-in-out;

        margin-right: 10;
        margin-left: auto;

        &:hover {
            width: 75%;
        background-color: rgb(255, 255, 255);
        width: 75%;
        outline: none;
        }

        &:focus {
            background-image: none;
        background-color: rgb(255, 255, 255);
        width: 75%;
        outline: none;
        border-color: #7cb7e7;
        box-shadow: 0 0 15px #7cb7e7;
        }

        &::placeholder {
            color: rgba(188, 188, 188, 0);
            transition: color 0.4s ease-in-out;
        }
        &:hover::placeholder {
            color: rgb(188, 188, 188);
        }
        &:focus::placeholder {
            color: rgb(188, 188, 188);
        }
    `

    return (
        <>
            <SearchForm action="https://google.com/search">
                <input type="hidden" name="sitesearch" value="https://rtruc.github.io/vettec-project1/" />
                <SearchField type="text" id="search" name="q" autoComplete="off" placeholder="search" />
            </SearchForm>
        </>

    )
};