import Link from 'next/link';
import Image from 'next/image';
//Chakra UI
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} alt="banner" width={500} height={300} />
        <Box p={5}>
            <Text fontSize="sm" fontWeight="medium" color="gray.500">
                {purpose}
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
                {title1} <br /> {title2}
            </Text>
            <Text fontSize="lg" fontWeight="medium" color="gray.700">
                {desc1}
            </Text>
            <Button fontSize='xl' bg="blue.300"  color="black">
                <Link href={linkName}><a>{buttonText}</a></Link>
            </Button>
        </Box>
    </Flex>
);

export default Banner;