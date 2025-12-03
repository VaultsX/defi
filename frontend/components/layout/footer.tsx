import { Logo } from '@/components/logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-800"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="full" size="md" className="text-white" />
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm max-w-md">
              Decentralized vault platform enabling users to create multiple
              ERC-4626 compliant vaults for automated yield generation across
              DeFi protocols.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white dark:text-gray-200 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-black rounded transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/create"
                  className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-black rounded transition-colors"
                >
                  Create Vault
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-black rounded transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white dark:text-gray-200 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-4626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-black rounded transition-colors"
                >
                  ERC-4626 Standard
                </a>
              </li>
              <li>
                <a
                  href="https://docs.base.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-black rounded transition-colors"
                >
                  Base Network
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-black rounded transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-800">
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm">
            © {currentYear} VaultsIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

