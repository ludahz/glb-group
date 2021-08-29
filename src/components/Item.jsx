import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import styled from 'styled-components'
import theme from '../styles/themes'
import { useRouter } from 'next/router'

export const Card = styled.div`
  height: 280px;
  width: 270px;
  border: solid 1px;
  padding: 1rem;
  background: #203856;
  @media ${theme.breakpoints.md} {
    width: 200px;
  }
  @media ${theme.breakpoints.sd} {
    width: 250px;
  }
  h2 {
    margin-bottom: 1rem;
    color: ${theme.colors.compliment2};
  }
  p {
    color: #fff;
  }
  Button {
    position: absolute;
    bottom: 20px;
    border: solid ${theme.colors.compliment2};
    font-weight: 600;
    color: ${theme.colors.compliment2};
  }
`

const Item = (props) => {
  const router = useRouter()
  return (
    <Paper>
      <Card>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button
          className='CheckButton'
          onClick={() => router.push('/products')}
        >
          Check it out!
        </Button>
      </Card>
    </Paper>
  )
}

export default Item
