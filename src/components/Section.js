import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Section({title, desc, lftbtntxt, rgtbtntxt, bgImg}) {
  return (
    <Wrap BgImg={bgImg}>
        <Fade bottom>
            <ItemText >
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
        </Fade>
        <Button>
            <Fade bottom>
            <ButtonGrp>
               { lftbtntxt && 
                    <Lftbtn>
                        {lftbtntxt}
                    </Lftbtn>
                }

                { rgtbtntxt &&
                    <Rgtbtn>
                        {rgtbtntxt}
                    </Rgtbtn>
                }
            </ButtonGrp>
            </Fade>
            <DownArrow src='/images/down-arrow.svg'/>
        </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    // background-repeat: no-repeat
    background-image: ${props => `url("/images/${props.BgImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical spacing
    align-item: center; //horizontal alignment
   
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    // color: white;
`

const ButtonGrp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`

const Lftbtn = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`

const Rgtbtn = styled(Lftbtn)`
    background: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img`
    margin-bottom: 10px;
    height: 40px;
    // overflow-y: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`

const Button = styled.div`
`
