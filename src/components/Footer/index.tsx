import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Container, SocialLinks } from './styles'

const Footer = () => {
  return (
    <Container>
      <SocialLinks>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaTwitter />
        </span>
      </SocialLinks>
    </Container>
  )
}

export default Footer
