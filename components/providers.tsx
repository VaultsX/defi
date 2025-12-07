'use client'

import { WagmiProvider, type State } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { config, projectId, networks, wagmiAdapter } from '@/config/wagmi'

const queryClient = new QueryClient()

// Create AppKit instance (only if projectId is provided)
if (projectId) {
  createAppKit({
    adapters: [wagmiAdapter],
    networks,
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
} else if (typeof window !== 'undefined') {
  console.warn(
    'NEXT_PUBLIC_REOWN_PROJECT_ID is not set. WalletConnect will not be available. Get your project ID from https://dashboard.reown.com'
  )
}

export function Providers({
  children,
  initialState,
}: {
  children: React.ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

