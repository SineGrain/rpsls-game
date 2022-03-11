import * as React from 'react'
import { Pentagon } from '../components/Pentagon/Pentagon'
import { styled } from '../stitches.config'

const PentagonContainer = styled('div', {
    width: '100%',
    display:'flex',
    justifyContent: 'center'
  })
  
export const Landing = () => {
    return (
        <PentagonContainer>
              <Pentagon />
        </PentagonContainer>
    )
}