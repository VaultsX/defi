import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32"
        aria-labelledby="hero-heading"
      >
        <div className="text-center">
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Create Multiple Vaults.
            <br />
            <span className="text-red-600 dark:text-red-500">
              Maximize Your Yield.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            VaultsIQ enables you to create and manage multiple ERC-4626
            compliant vaults for automated yield generation across DeFi
            protocols.
          </p>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10">
            Deploy your assets to Aave, Compound, and Uniswap automatically.
            Each vault operates independently with its own strategy and
            allocation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/create"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 transition-colors shadow-lg hover:shadow-xl"
              aria-label="Create a new vault"
            >
              Create Your First Vault
            </a>
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 transition-colors"
              aria-label="Go to dashboard"
            >
              View Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900"
        aria-labelledby="features-heading"
      >
        <div className="text-center mb-16">
          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Powerful Features
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Everything you need to manage multiple vaults and optimize your
            DeFi strategy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-colors shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-600 dark:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Multiple Vaults
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Create and manage unlimited personal ERC-4626 compliant vaults.
              Each vault can have its own strategy, asset allocation, and
              protocol preferences.
            </p>
          </article>
          <article className="bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-colors shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-600 dark:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Automated Yield
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Deploy assets to multiple DeFi protocols (Aave, Compound,
              Uniswap) automatically. Our smart allocation system optimizes
              yield generation across protocols.
            </p>
          </article>
          <article className="bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-colors shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-600 dark:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              ERC-4626 Standard
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Industry-standard tokenized vault interface ensures maximum
              interoperability. Your vault shares are transferable ERC-20 tokens
              compatible with all DeFi protocols.
            </p>
          </article>
        </div>
      </section>

      {/* Main Content Area - ERC-4626 & Yield Generation */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        aria-labelledby="content-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="content-heading"
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              ERC-4626 Tokenized Vaults
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              ERC-4626 is the industry standard for tokenized vaults. It
              provides a unified interface for vaults that accept a specific
              ERC-20 token and issue shares representing a proportional claim on
              the vault's underlying assets.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              With VaultsIQ, you can create multiple ERC-4626 compliant vaults,
              each managing its own assets and generating yield through automated
              deployment to leading DeFi protocols.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-600 dark:text-red-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Standardized interface for maximum compatibility
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-600 dark:text-red-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Transferable vault shares as ERC-20 tokens
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-600 dark:text-red-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Automated yield generation across protocols
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How Yield Generation Works
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Deposit Assets
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Deposit your assets (USDC, USDT, WETH) into your vault
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Configure Allocation
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Set how assets are allocated across Aave, Compound, and
                    Uniswap
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Automated Deployment
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Assets are automatically deployed to protocols based on your
                    allocation
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Earn Yield
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Your vault generates yield automatically, and you can
                    withdraw anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
