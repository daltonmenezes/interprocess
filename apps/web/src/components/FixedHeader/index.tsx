import { HeaderContent, HeaderContainer } from './styles'

export function FixedHeader({ children }: { children: React.ReactNode }) {
  return (
    <HeaderContainer>
      <HeaderContent>{children}</HeaderContent>
    </HeaderContainer>
  )
}
