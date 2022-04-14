import styled from "styled-components";

export const FooterItem = ({link, iconURL, altTxt}) => {

    const FooterItemDiv = styled.div`
        padding: 0px 5px;
        transition: background-color .2s ease-out 100ms;

        &:hover {
            background-color: rgb(203, 201, 201);
        }`

    const Icon = styled.img`
        max-height: 20px;
        margin-top: 5px;

        & a:hover {
            background-color: rgb(203, 201, 201);
        } `

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