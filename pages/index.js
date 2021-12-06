import { Box, Flex } from '@chakra-ui/layout';
//Custom components
import { Banner, Property } from '../components';

//Services
import { baseUrl, fetchApi } from '../services/fetchApi';

const Home = ({ propertyForRent, propertyForSale }) => {
  return (
    <Box>
      <Banner
        purpose={'RENT A HOME'}
        title1={'Rent'}
        title2={'Your Dream Home'}
        desc1={'Explore Apartments, Villas, and Houses'}
        desc2={'All from the comodity of your home'}
        buttonText={'Renting'}
        linkName={'/serch?purpose=for-rent'}
        imageUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'}
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map(property => (
         <Property property={property} key={property.id} />
       ))}
      </Flex>
      <Banner
       purpose={'BUY A HOUSE'}
        title1={'Find, Buy & Own Your'}
        title2={'Dream Home'}
        desc1={'Explore Apartments, Villas, and Houses'}
        desc2={'All from the comodity of your home'}
        buttonText={'Buying'}
        linkName={'/serch?purpose=for-rent'}
        imageUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'} />
      <Flex flexWrap="wrap">
        {propertyForSale.map(property => (
         <Property property={property} key={property.id} />
       ))}
      </Flex>
    </Box>
  )
}

export default Home;

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits
    }
  }
}