"use client";

import { useAccount, useReadContract } from "wagmi";
import { VaultCard } from "@/components/vaults/VaultCard";
import { Vault, VaultMetrics, VaultFilters, SortOption } from "@/types/vault";
import { VAULT_FACTORY_ABI, VAULT_FACTORY_ADDRESS } from "@/config/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { address } = useAccount();
  const router = useRouter();
  const [vaults, setVaults] = useState<Vault[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<VaultFilters>({
    searchQuery: "",
    minValue: "",
    minApy: "",
    sortBy: "newest",
  });
  const [metrics, setMetrics] = useState<VaultMetrics>({
    totalValue: 0n,
    totalApy: 0,
    vaultCount: 0,
    activeVaults: 0,
  });

  // Fetch user's vaults from the factory contract
  const { data: userVaults, isLoading: isLoadingVaults } = useReadContract({
    abi: VAULT_FACTORY_ABI,
    address: VAULT_FACTORY_ADDRESS,
    functionName: "getUserVaults",
    args: [address || "0x0"],
    query: {
      enabled: !!address,
    },
  });

  useEffect(() => {
    const fetchVaults = async () => {
      if (!userVaults) return;

      setIsLoading(true);
      try {
        // TODO: Fetch vault details for each vault address
        // This is a mock implementation - replace with actual contract calls
        const mockVaults: Vault[] = (userVaults as string[]).map(
          (address, i) => ({
            address,
            name: `My Vault #${i + 1}`,
            asset: "USDC",
            totalAssets: BigInt(1000 * 10 ** 6), // 1000 USDC (6 decimals)
            totalSupply: BigInt(1000 * 10 ** 18), // 1000 shares
            userBalance: BigInt(1000 * 10 ** 18), // User owns all shares in this mock
            owner: address || "",
            apy: 3.5 + Math.random() * 5, // Random APY between 3.5% and 8.5%
            protocolAllocations: {
              Aave: 40,
              Compound: 30,
              Uniswap: 30,
            },
            createdAt: Date.now() - i * 24 * 60 * 60 * 1000, // Staggered creation times
            lastUpdated: Date.now(),
          })
        );

        setVaults(mockVaults);

        // Calculate metrics
        const totalValue = mockVaults.reduce(
          (sum, v) => sum + v.totalAssets,
          0n
        );
        const totalApy =
          mockVaults.reduce((sum, v) => sum + v.apy, 0) /
          Math.max(1, mockVaults.length);

        setMetrics({
          totalValue,
          totalApy,
          vaultCount: mockVaults.length,
          activeVaults: mockVaults.length, // In a real app, we'd check which are active
        });
      } catch (err) {
        console.error("Error fetching vaults:", err);
        setError("Failed to load vaults. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVaults();
  }, [userVaults]);

  const filteredVaults = vaults.filter((vault) => {
    const matchesSearch = vault.name
      .toLowerCase()
      .includes(filters.searchQuery.toLowerCase());
    const minValue = filters.minValue
      ? BigInt(parseFloat(filters.minValue) * 10 ** 6)
      : 0n; // Assuming 6 decimals
    const minApy = filters.minApy ? parseFloat(filters.minApy) : 0;

    return (
      matchesSearch && vault.totalAssets >= minValue && vault.apy >= minApy
    );
  });

  const sortedVaults = [...filteredVaults].sort((a, b) => {
    switch (filters.sortBy) {
      case "newest":
        return b.createdAt - a.createdAt;
      case "oldest":
        return a.createdAt - b.createdAt;
      case "highestValue":
        return Number(b.totalAssets - a.totalAssets);
      case "highestApy":
        return b.apy - a.apy;
      default:
        return 0;
    }
  });

  if (!address) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">Connect your wallet</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Please connect your wallet to view your vaults.
        </p>
        <Button onClick={() => router.push("/")}>Go to Home</Button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">Error loading vaults</h2>
        <p className="mb-6 text-red-500">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Vaults</h1>
          <p className="text-muted-foreground">
            Manage your yield-generating vaults
          </p>
        </div>
        <Button onClick={() => router.push("/create")}>Create New Vault</Button>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Value"
          value={`$${(Number(metrics.totalValue) / 10 ** 6).toLocaleString()}`}
          description="Across all vaults"
        />
        <StatCard
          title="Average APY"
          value={`${metrics.totalApy.toFixed(2)}%`}
          description="Weighted average"
        />
        <StatCard
          title="Total Vaults"
          value={metrics.vaultCount.toString()}
          description={`${metrics.activeVaults} active`}
        />
        <StatCard
          title="Estimated Daily Yield"
          value={`$${(
            (Number(metrics.totalValue) * (metrics.totalApy / 100)) /
            365
          ).toFixed(2)}`}
          description="Based on current APY"
        />
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-medium">Filters</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <label htmlFor="search" className="mb-1 block text-sm font-medium">
              Search
            </label>
            <Input
              id="search"
              placeholder="Search vaults..."
              value={filters.searchQuery}
              onChange={(e) =>
                setFilters({ ...filters, searchQuery: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="minValue"
              className="mb-1 block text-sm font-medium"
            >
              Min Value (USD)
            </label>
            <Input
              id="minValue"
              type="number"
              placeholder="0.00"
              value={filters.minValue}
              onChange={(e) =>
                setFilters({ ...filters, minValue: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="minApy" className="mb-1 block text-sm font-medium">
              Min APY (%)
            </label>
            <Input
              id="minApy"
              type="number"
              step="0.1"
              placeholder="0.0"
              value={filters.minApy}
              onChange={(e) =>
                setFilters({ ...filters, minApy: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="sortBy" className="mb-1 block text-sm font-medium">
              Sort By
            </label>
            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                setFilters({ ...filters, sortBy: value as SortOption })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highestValue">Highest Value</SelectItem>
                <SelectItem value="highestApy">Highest APY</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Vaults Grid */}
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      ) : sortedVaults.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedVaults.map((vault) => (
            <VaultCard key={vault.address} vault={vault} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
          <h3 className="mb-2 text-lg font-medium">No vaults found</h3>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            {filters.searchQuery || filters.minValue || filters.minApy
              ? "No vaults match your filters."
              : "You don't have any vaults yet."}
          </p>
          <Button onClick={() => router.push("/create")}>
            Create Your First Vault
          </Button>
        </div>
      )}
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
