/**
 * Application constants and configuration
 */

// Network Configuration
export const NETWORK = {
  name: 'base-sepolia',
  chainId: 84532,
  rpcUrl: 'https://sepolia.base.org',
  explorerUrl: 'https://sepolia.basescan.org',
} as const

// Contract Addresses
// TODO: Update these addresses after contract deployment
export const CONTRACT_ADDRESSES = {
  VAULT_FACTORY: process.env.NEXT_PUBLIC_VAULT_FACTORY_ADDRESS || '',
} as const

// Validate contract addresses in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  if (!CONTRACT_ADDRESSES.VAULT_FACTORY) {
    console.warn('Vault Factory address is not set. Please configure NEXT_PUBLIC_VAULT_FACTORY_ADDRESS')
  }
}

