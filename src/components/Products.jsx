import styled from 'styled-components'
import theme from '../styles/themes'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Item from './Item'
import Image from 'next/image'

export const ProductSection = styled.div`
  background: ${theme.colors.backgroundLight};
`

export const ProductContainer = styled.div`
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  h1 {
    font-size: 1.4rem;
    color: #000;
    margin-bottom: 1rem;
  }
`
export const ProductCarousel = styled.div`
  width: 90%;
  min-height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: relative;

  @media ${theme.breakpoints.md} {
    width: 98%;
  }
  @media ${theme.breakpoints.sd} {
    flex-direction: column;
  }
`
export const DescSection = styled.div`
  border: solid 1px;
  height: 280px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.backgroundLight};
  @media ${theme.breakpoints.sd} {
    display: none;
  }
`

export const CarouselContainer = styled.div`
  display: flex;

  position: relative;
  height: 280px;
  @media ${theme.breakpoints.sd} {
    flex-direction: column;
  }
`
export const Img = styled(Image)`
  object-fit: scale-down;
`

var items = [
  {
    name: 'Electronics',
    img: [
      '/images/product/laptops.jpeg',
      '/images/product/kitchen-appliances.jpeg',
    ],

    description: 'Computers, Tablets, Mobiles... ',
  },
  {
    name: 'Food Items',
    img: ['/images/product/dilmah.png', '/images/product/npv.png'],
    description: 'Milk, Juice, Biscuits, candy...',
  },
  {
    name: 'Machinery',
    img: [
      '/images/product/Food-Processing-Machinery.jpeg',
      '/images/product/construction.jpeg',
    ],

    description: 'Construction, Food Processing, Agriculture...',
  },
]

const Products = () => {
  return (
    <ProductSection>
      <ProductContainer>
        <h1>Products</h1>
        <ProductCarousel>
          <Carousel fullHeightHover={true} timeout={1000} interval={7000}>
            {items.map((item, i) => (
              <CarouselContainer key={i}>
                <Item item={item} />
                {item.img.map((value, i) => (
                  <DescSection key={i}>
                    <Img src={value} alt='products' width='250' height='250' />
                  </DescSection>
                ))}

                {/* <DescSection>
                  <h1>{item.img}</h1>
                </DescSection> */}
              </CarouselContainer>
            ))}
          </Carousel>
        </ProductCarousel>
      </ProductContainer>
    </ProductSection>
  )
}

export default Products
