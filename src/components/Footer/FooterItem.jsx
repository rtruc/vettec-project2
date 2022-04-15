import styled from "styled-components";

const FooterItemDiv = styled.div`
    padding: 0px 5px;
    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: rgb(235, 16, 246);
    }`

const Icon = styled.img`
    max-height: 20px;
    margin-top: 5px;

    & a:hover {
        background-color: rgb(235, 16, 246);
    } `
export const FooterItem = ({link, iconURL, altTxt}) => {


        return (
            <>
                <FooterItemDiv>
                    <a href={link}>
                        <Icon alt={altTxt} src={iconURL} />
                    </a>
                </FooterItemDiv>
            </>
        );

}