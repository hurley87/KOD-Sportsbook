"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_ID}` }),
    publicProvider(),
  ]
);

const projectId = "KO3d54b94904fa44c96981f2cc8e135e07D";

const { wallets } = getDefaultWallets({
  appName: "KOD",
  projectId,
  chains,
});
const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={{
          appName: "KOD",
        }}
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
