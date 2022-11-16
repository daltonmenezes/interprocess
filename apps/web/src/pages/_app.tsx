import { motion, AnimatePresence } from 'framer-motion'
import * as RadixDialog from '@radix-ui/react-dialog'
import { useExitIntent } from 'use-exit-intent'

import { RootContainer, Footer, ExitIntentModal } from 'components'
import { useDisclosure } from 'hooks'

import type { AppProps } from 'next/app'

import 'styles/global'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const { isOpen, open, toggle } = useDisclosure(false)
  const { unsubscribe, registerHandler } = useExitIntent()

  registerHandler({
    id: 'openModal',
    handler: () => open(),
  })

  function handleCloseModalUnsubscription() {
    toggle(false)
    unsubscribe()
  }

  return (
    <RootContainer>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear', opacity: { duration: 0.5 } }}
          variants={{
            hidden: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <Component {...pageProps} />
          <Footer />

          <RadixDialog.Root open={isOpen}>
            <ExitIntentModal
              onDismiss={() => handleCloseModalUnsubscription()}
            />
          </RadixDialog.Root>
        </motion.div>
      </AnimatePresence>
    </RootContainer>
  )
}
