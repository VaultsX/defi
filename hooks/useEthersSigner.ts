import { useWalletClient } from 'wagmi'
import { useMemo } from 'react'
import { walletClientToSigner } from '@/config/adapter'
import type { JsonRpcSigner } from 'ethers'

/**
 * Hook to get an ethers.js JsonRpcSigner from wagmi's wallet client
 * @returns ethers.js JsonRpcSigner or undefined if wallet is not connected
 */
export function useEthersSigner(): JsonRpcSigner | undefined {
  const { data: walletClient } = useWalletClient()

  return useMemo(() => {
    if (!walletClient) return undefined
    return walletClientToSigner(walletClient)
  }, [walletClient])
}

