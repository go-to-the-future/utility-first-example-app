import type { NextPage } from 'next'
import { Box as ChakraBox, Button as ChakraButton} from '@chakra-ui/react'
import { Box as MuiBox, Button as MuiButton } from '@mui/material'
import { StyledButton } from '../muiComponents/MuiButton/index';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div className="m-4">
        <button className="w-96 h-10 rounded-lg bg-green-500 text-white font-bold hover:bg-green-700">TailwindCSSのボタン</button>
      </div>
      <ChakraBox margin={4}>
        <ChakraButton colorScheme="green" width="386px">Chakra UIのボタン</ChakraButton>
      </ChakraBox>
      {/* MUIではBox,  */}
      <MuiBox m={4}>
        <MuiButton
          sx={[{
            color: 'white',
            backgroundColor: 'primary.main',
            width: '386px',
            borderRadius: '6px',
          },
          {
            '&:hover': {
            backgroundColor: 'secondary.main'
            }
          }
        ]}>
          MUIのボタン
        </MuiButton>
      </MuiBox>
      <MuiBox m={4}>
        <StyledButton
          sx={[{
            color: 'white',
            width: '386px',
            borderRadius: '6px',
          },
          {
            '&:hover': {
            backgroundColor: 'primary.main'
            }
          }
        ]}>
         StyledのMUIのボタン
        </StyledButton>
      </MuiBox>
    </div>
  )
}

export default Home
