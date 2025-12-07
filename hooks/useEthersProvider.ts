import { usePublicClient } from 'wagmi'
import { useMemo } from 'react'
import { publicClientToProvider } from '@/config/adapter'
import type { BrowserProvider } from 'ethers'

/**
 * Hook to get an ethers.js BrowserProvider from wagmi's public client
 * @returns ethers.js BrowserProvider or undefined if not available
 */
export function useEthersProvider(): BrowserProvider | undefined {
  const publicClient = usePublicClient()

  return useMemo(() => {
    if (!publicClient) return undefined
    return publicClientToProvider(publicClient)
  }, [publicClient])
}

