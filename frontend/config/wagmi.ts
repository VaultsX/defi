
import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { NETWORK } from './constants'

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || ''

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    injected(),
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [baseSepolia.id]: http(NETWORK.rpcUrl),
  },
  ssr: true,
})
