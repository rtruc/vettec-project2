import styled from "styled-components";

export const FooterItemBundle = (footerItems) => {

    // const FooterItemBundleDiv = styled.div`
        
    // `

    return (
        <>
            {footerItems.map((footerItem, index) => {
                return (
                    <>
                        {footerItem};
                    </>
                )
            })
        }    
        </>
    )
}