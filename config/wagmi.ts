import { createConfig, http } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Get project ID from environment variable
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || ''

if (!projectId) {
  console.warn('NEXT_PUBLIC_REOWN_PROJECT_ID is not set. WalletConnect may not work properly.')
}

// Configure Base Sepolia chain
const baseSepoliaConfig = {
  ...baseSepolia,
  rpcUrls: {
    default: {
      http: ['https://sepolia.base.org'],
    },
  },
}

// Create wagmi config
export const wagmiAdapter = new WagmiAdapter({
  networks: [baseSepoliaConfig],
  projectId,
})

export const config = createConfig({
  chains: [baseSepoliaConfig],
  transports: {
    [baseSepolia.id]: http('https://sepolia.base.org'),
  },
  adapters: [wagmiAdapter],
})

// Create AppKit instance
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [baseSepoliaConfig],
  projectId,
  metadata: {
    name: 'VaultsIQ',
    description: 'Decentralized vault platform for automated yield generation',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    icons: [],
  },
  features: {
    analytics: true,
    email: false,
    socials: [],
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

