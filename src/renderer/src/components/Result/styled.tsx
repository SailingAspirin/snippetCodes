import styled from 'styled-components'
interface Props {
  isActive: boolean
}

export const Zero = styled.div<Props>`
  background-color: ${(props) => (props.isActive ? 'rebeccapurple' : '')};
  color: ${(props) => (props.isActive ? '#fff' : '')};
`
