import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { baseSepolia } from 'wagmi/chains'
import { NETWORK } from './constants'

// Get project ID from environment variable
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || ''

if (!projectId) {
  console.warn('NEXT_PUBLIC_REOWN_PROJECT_ID is not set. WalletConnect may not work properly.')
}

// Configure Base Sepolia chain with explicit RPC endpoint
const baseSepoliaConfig = {
  ...baseSepolia,
  rpcUrls: {
    default: {
      http: [NETWORK.rpcUrl],
    },
  },
}

export const networks = [baseSepoliaConfig]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

