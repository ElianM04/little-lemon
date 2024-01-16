import { Box } from '@chakra-ui/react'
import Header from '../header'
import PictureSection from './card'
import ReviewsSection from './reviews'
export default function Home() {
  return (
    <>
  <Box bg="#495e57">
  <Header/>
  </Box>


  <PictureSection/>


  <Box bg='#495e57'>
  <ReviewsSection/>
  </Box>
       </>
    )
}
