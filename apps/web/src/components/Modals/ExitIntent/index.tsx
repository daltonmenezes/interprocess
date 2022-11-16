import * as RadixDialog from '@radix-ui/react-dialog'

import { ExternalLink, Button } from 'components'
import { getPublicPath } from 'shared/utils'
import { library } from 'shared/constants'

import {
  Tag,
  Image,
  Title,
  Overlay,
  Content,
  Container,
  CloseButton,
  ContentGroup,
} from './styles'

interface ModalProps {
  onDismiss: () => void
}

export function ExitIntentModal({ onDismiss }: ModalProps) {
  return (
    <RadixDialog.Portal>
      <Overlay />

      <Container onInteractOutside={(event) => event.preventDefault()}>
        <CloseButton onClick={onDismiss}>X</CloseButton>

        <Content>
          <Image />

          <ContentGroup>
            <Tag>Thanks for the visit!</Tag>

            <Title>
              If you liked,
              <br /> <strong>drop a star</strong> on <strong>GitHub</strong>!
              <img src={getPublicPath('/sparkles.png')} alt="" />
            </Title>

            <ExternalLink href={library.url}>
              <Button tabIndex={-1}>Go to GitHub</Button>
            </ExternalLink>
          </ContentGroup>
        </Content>
      </Container>
    </RadixDialog.Portal>
  )
}
