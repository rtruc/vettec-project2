
export const FooterItemBundle = (footerItems) => {


    return (
        <>
            {footerItems.map((footerItem, index) => {
                return (
                    <>
                        {footerItem};
                    </>
                )
            })}    
        </>
    )
}