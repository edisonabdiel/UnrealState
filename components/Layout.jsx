import Head from "next/head";

import { Box } from '@chakra-ui/react';


const Layout = ({children}) => (
    <>
        <Head>
            <title>UnrealState</title>
        </Head>
        <Box maxWidth="1200px" mx="auto" px={3}>
            <header>
                Navbar
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Box>
    </>
)


export default Layout;
