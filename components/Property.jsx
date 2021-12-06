import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import defaultImage from '../assets/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, room, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w={420} cursor="pointer" justifyContent="flex-start" p={5} paddingTop={0}>
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} alt="property" />
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">
                            {isVerified && <GoVerified size={16}/>}
                        </Box>
                        <Text fontWeight="bold" fontSize="lg">
                            AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                        </Text>
                    </Flex>
                    <Box>
                        <Avatar src={agency?.logo?.url} size="sm"/>
                    </Box>
                </Flex>
                <Flex alignItems="center" p={1} justifyContent="space-between" w={250} color="blue.400">
                    {room} <FaBed /> | {baths} <FaBath /> | {millify(area)} <BsGridFill />
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;
