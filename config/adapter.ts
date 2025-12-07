import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { type WalletClient, type PublicClient } from 'wagmi'
import { type HttpTransport } from 'viem'

/**
 * Converts a viem WalletClient to an ethers.js JsonRpcSigner
 */
export function walletClientToSigner(walletClient: WalletClient): JsonRpcSigner {
  const { account, chain, transport } = walletClient
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new BrowserProvider(transport as HttpTransport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/**
 * Converts a viem PublicClient to an ethers.js Provider
 */
export function publicClientToProvider(publicClient: PublicClient): BrowserProvider {
  const { chain, transport } = publicClient
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new BrowserProvider(transport as HttpTransport, network)
  return provider
}

