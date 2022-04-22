import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchIcon } from "../../img/icons";
import { searchTitles } from "../../redux/actions/actions";


const SearchFormDiv = styled.div`
        display:flex;
        align-items:center;

        position: absolute;
        right: 5px;
        top: 9px;
`

const SearchField = styled.input`
    display: flex;
    border: none;

    width: 100px;

    position: relative;

    padding: 3px 5px;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;

    text-align: center;
        
    transition: 
        background-color 0.3s ease-in-out,
        color 0.3s ease-in-out;

    &:hover {
        background-color: rgba(239, 66, 248, 0.318);
        outline: none;
    }

    &:focus {
        background-image: none;
        color: white;
        background-color: rgb(211, 15, 222);
        outline: none;
        border-color: #ce61fd;
    }

    &::placeholder {
        color: rgb(252, 187, 255);
        transition: color 0.4s ease-in-out;
    }
    &:focus::placeholder {
        color: rgba(188, 188, 188, 0);
    }
`

const SearchIcon = styled.img`
    max-height:17px;
    padding-right: 5px;
`

export const SearchForm = () => {

    const dispatch = useDispatch();
    const Test = <SearchIcon href={searchIcon} />;
    console.log(Test);

    return (
        <SearchFormDiv>
            <SearchIcon src={searchIcon} />
            <SearchField autoComplete="off" placeholder="search"
                onChange={e => dispatch(searchTitles(e.target.value))} />
        </SearchFormDiv>
    )
};