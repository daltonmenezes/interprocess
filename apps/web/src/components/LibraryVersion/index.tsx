import { library } from 'shared/constants'

import { LibraryVersionContainer } from './styles'

export function LibraryVersion() {
  return <LibraryVersionContainer>v{library.version}</LibraryVersionContainer>
}
