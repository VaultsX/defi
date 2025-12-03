import Link from "next/link";
import { Vault } from "@/types/vault";
import { formatEther } from "viem";

interface VaultCardProps {
  vault: Vault;
}

export function VaultCard({ vault }: VaultCardProps) {
  const formattedBalance = formatEther(vault.totalAssets);
  const userShare =
    vault.userBalance > 0n
      ? (Number(vault.userBalance) / Number(vault.totalSupply)) * 100
      : 0;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {vault.name ||
            `Vault ${vault.address.slice(0, 6)}...${vault.address.slice(-4)}`}
        </h3>
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-500">
          {vault.asset}
        </span>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Total Value
          </span>
          <span className="font-medium">
            {parseFloat(formattedBalance).toFixed(4)} {vault.asset}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Your Share
          </span>
          <span className="font-medium">{userShare.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">APY</span>
          <span className="font-medium text-green-600 dark:text-green-400">
            {vault.apy.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Allocations
        </h4>
        <div className="space-y-1">
          {Object.entries(vault.protocolAllocations).map(
            ([protocol, allocation]) => (
              <div key={protocol} className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {protocol}
                </span>
                <span className="text-xs font-medium">{allocation}%</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Link
          href={`/vaults/${vault.address}`}
          className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          View
        </Link>
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700">
          Deposit
        </button>
      </div>
    </div>
  );
}
