export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="text-center">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Welcome to{" "}
            <span className="text-red-600 dark:text-red-500">VaultsIQ</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Create multiple ERC-4626 compliant vaults for automated yield
            generation across DeFi protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 transition-colors"
              aria-label="Go to dashboard"
            >
              View Dashboard
            </a>
            <a
              href="/create"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 transition-colors"
              aria-label="Create a new vault"
            >
              Create Vault
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Multiple Vaults
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create and manage multiple personal ERC-4626 compliant vaults for
              different strategies or assets.
            </p>
          </article>
          <article className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Automated Yield
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deploy assets to DeFi protocols (Aave, Compound, Uniswap)
              automatically for optimized yield generation.
            </p>
          </article>
          <article className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ERC-4626 Standard
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Industry-standard tokenized vault interface for maximum
              interoperability and compatibility.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
