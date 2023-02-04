import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <div>
        
      <Container>
          <Section
            title = 'Model S'
            desc = 'Order Online for Touchless Delivery'
            bgImg = 'model-s.jpg'
            lftbtntxt = 'Custom Order'
            rgtbtntxt = 'Existing inventory'
          />

          <Section
            title = 'Model Y'
            desc = 'Order Online for Touchless Delivery'
            bgImg = 'model-y.jpg'
            lftbtntxt = 'Custom Order'
            rgtbtntxt = 'Existing inventory'
          />

          <Section
            title = 'Model X'
            desc = 'Order Online for Touchless Delivery'
            bgImg = 'model-x.jpg'
            lftbtntxt = 'Custom Order'
            rgtbtntxt = 'Existing inventory'
          />

          <Section
            title = 'Model 3'
            desc = 'Order Online for Touchless Delivery'
            bgImg = 'model-3.jpg'
            lftbtntxt = 'Custom Order'
            rgtbtntxt = 'Existing inventory'
          />

          <Section
            title = 'Lowest Cost Solar Panels in America'
            desc = 'Money back guarantee'
            bgImg = 'solar-panel.jpg'
            lftbtntxt = 'Order Now'
            rgtbtntxt = 'Learn More'
          />

          <Section
            title = 'Solar for New Roofs'
            desc = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels '
            bgImg = 'solar-roof.jpg'
            lftbtntxt = 'Order Now'
            rgtbtntxt = 'Learn Moe'
          />

          <Section
            title = 'Accessories'
            // desc = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels '
            bgImg = 'accessories.jpg'
            lftbtntxt = 'Shop Now'
            // rgtbtntxt = 'Learn Moe'
          />

      </Container>
    </div>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`
