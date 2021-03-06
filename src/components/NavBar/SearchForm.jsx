import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchIcon } from "../../img/icons";
import { searchTitles } from "../../redux/actions/actions";
import { theme } from "../../util/theme";


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

    /* &:hover {
        background-color: ${theme.searchBox_BackgroundColor_Hover};
        outline: none;
    } */

    &:focus {
        background-image: none;
        color: ${theme.navbar_Text};
        background-color: ${theme.hover_Color_Alt};
        outline: none;
    }

    &::placeholder {
        color: ${theme.searchBox_Color_Placeholder};
        transition: color 0.4s ease-in-out;
    }
    &:hover::placeholder, &:focus::placeholder {
        color: ${theme.searchBox_Color_Placeholder_Focus};
    }
`

const SearchIcon = styled.img`
    max-height:17px;
    padding-right: 5px;
`

export const SearchForm = () => {

    const dispatch = useDispatch();
    const Test = <SearchIcon href={searchIcon} />;

    return (
        <SearchFormDiv>
            <SearchIcon src={searchIcon} />
            <SearchField autoComplete="off" placeholder="search"
                onChange={e => dispatch(searchTitles(e.target.value))} />
        </SearchFormDiv>
    )
};