export interface Vault {
  address: string;
  name: string;
  asset: string;
  totalAssets: bigint;
  totalSupply: bigint;
  userBalance: bigint;
  owner: string;
  apy: number;
  protocolAllocations: {
    [protocol: string]: number; // percentage (0-100)
  };
  createdAt: number; // timestamp
  lastUpdated: number; // timestamp
}

export interface VaultMetrics {
  totalValue: bigint;
  totalApy: number;
  vaultCount: number;
  activeVaults: number;
}

export type SortOption = "newest" | "oldest" | "highestValue" | "highestApy";

export interface VaultFilters {
  searchQuery: string;
  minValue: string;
  minApy: string;
  sortBy: SortOption;
}
