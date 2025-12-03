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
export const VAULT_FACTORY_ADDRESS = (process.env.NEXT_PUBLIC_VAULT_FACTORY_ADDRESS || '0x0000000000000000000000000000000000000000') as `0x${string}`

export const CONTRACT_ADDRESSES = {
  VAULT_FACTORY: VAULT_FACTORY_ADDRESS,
  // ERC-20 Token Addresses on Base Sepolia
  USDC: '0x036CbD53842c5426634e7929541eC2318f3dCF7e' as `0x${string}`, // Base Sepolia USDC
  USDT: '0x0000000000000000000000000000000000000000' as `0x${string}`, // TODO: Add when available
  WETH: '0x4200000000000000000000000000000000000006' as `0x${string}`, // Base Sepolia WETH
} as const

// Supported Assets for Vault Creation
export const SUPPORTED_ASSETS = [
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: CONTRACT_ADDRESSES.USDC,
    decimals: 6,
    icon: '💵',
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    address: CONTRACT_ADDRESSES.WETH,
    decimals: 18,
    icon: '⟠',
  },
] as const

// Vault Factory ABI (minimal - add more functions as needed)
export const VAULT_FACTORY_ABI = [
  {
    inputs: [
      { name: 'asset', type: 'address' },
      { name: 'name', type: 'string' },
      { name: 'symbol', type: 'string' },
    ],
    name: 'createVault',
    outputs: [{ name: 'vault', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'user', type: 'address' }],
    name: 'getUserVaults',
    outputs: [{ name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllVaults',
    outputs: [{ name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const

// ERC-20 Token ABI (minimal - for approvals and balance checks)
export const ERC20_ABI = [
  {
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const

// Vault ABI (ERC-4626 standard functions)
export const VAULT_ABI = [
  {
    inputs: [
      { name: 'assets', type: 'uint256' },
      { name: 'receiver', type: 'address' },
    ],
    name: 'deposit',
    outputs: [{ name: 'shares', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'assets', type: 'uint256' },
      { name: 'receiver', type: 'address' },
      { name: 'owner', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [{ name: 'shares', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'assets', type: 'uint256' }],
    name: 'convertToShares',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'shares', type: 'uint256' }],
    name: 'convertToAssets',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'asset',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVaultInfo',
    outputs: [
      { name: 'name', type: 'string' },
      { name: 'asset', type: 'address' },
      { name: 'totalAssets', type: 'uint256' },
      { name: 'totalSupply', type: 'uint256' },
      { name: 'owner', type: 'address' },
      { name: 'apy', type: 'uint256' },
      { name: 'protocolAllocations', type: 'tuple[]' },
      { name: 'createdAt', type: 'uint256' },
      { name: 'lastUpdated', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

// Validate contract addresses in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  if (!VAULT_FACTORY_ADDRESS || VAULT_FACTORY_ADDRESS === '0x0000000000000000000000000000000000000000') {
    console.warn('Vault Factory address is not set. Please configure NEXT_PUBLIC_VAULT_FACTORY_ADDRESS')
  }
}
