import styled from 'styled-components'
import Image from 'next/image'
import { foodItems, machinery, electronics, exports } from '../data/products'
import theme from '../styles/themes'

export const ProductsSection = styled.div`
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.backgroundLight};
`
export const ProductsSectionTitle = styled.h1`
  margin-bottom: 1rem;
`
export const ProductsSectionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #838486;
  }
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Img = styled(Image)`
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`

export const ProductDiv = styled.div`
  /* background-color: black; */
  padding: 0.3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.8rem;
`

export const ProductsCategory = styled.div`
  h2 {
    padding-left: 24px;
  }
`

export const ProductHeading = styled.h3`
  font-size: 1.5rem;
  margin-left: 4rem;
  @media ${theme.breakpoints.sd} {
    margin-left: 10px;
  }
`

export const ProductDisplay = styled.div`
  margin: 1rem;

  h3 {
    text-align: center;
  }
`

const Products = () => {
  return (
    <ProductsSection>
      <ProductsSectionContainer>
        <ProductsSectionTitle>PRODUCTS</ProductsSectionTitle>
        <ProductsContainer>
          <h2>PRODUCTS WE IMPORT</h2>
          <ProductsCategory>
            <ProductHeading>Food</ProductHeading>
            <ProductDiv>
              {foodItems.map((item) => (
                <div key={item.id}>
                  <ProductDisplay>
                    <Img
                      priority={true}
                      src={item.img}
                      width='300px'
                      height='300px'
                    ></Img>
                    <h3>{item.title}</h3>
                  </ProductDisplay>
                </div>
              ))}
            </ProductDiv>
          </ProductsCategory>
          <ProductsCategory>
            <ProductHeading>Machinery</ProductHeading>
            <ProductDiv>
              {machinery.map((item) => (
                <div key={item.id}>
                  <ProductDisplay>
                    <Img
                      priority={true}
                      src={item.img}
                      width='300px'
                      height='300px'
                    ></Img>
                    <h3>{item.title}</h3>
                  </ProductDisplay>
                </div>
              ))}
            </ProductDiv>
          </ProductsCategory>
          <div>
            <ProductHeading>Electronics</ProductHeading>
            <ProductDiv>
              {electronics.map((item) => (
                <div key={item.id}>
                  <ProductDisplay>
                    <Img
                      priority={true}
                      src={item.img}
                      width='300px'
                      height='300px'
                    ></Img>
                    <h3>{item.title}</h3>
                  </ProductDisplay>
                </div>
              ))}
            </ProductDiv>
          </div>
        </ProductsContainer>
        <ProductsContainer>
          <h2>PRODUCTS WE EXPORT</h2>
          <ProductsCategory>
            <ProductHeading>Exports</ProductHeading>
            <ProductDiv>
              {exports.map((item) => (
                <div key={item.id}>
                  <ProductDisplay>
                    <Img
                      priority={true}
                      src={item.img}
                      width='300px'
                      height='300px'
                    ></Img>
                    <h3>{item.title}</h3>
                  </ProductDisplay>
                </div>
              ))}
            </ProductDiv>
          </ProductsCategory>
        </ProductsContainer>
      </ProductsSectionContainer>
    </ProductsSection>
  )
}

export default Products
