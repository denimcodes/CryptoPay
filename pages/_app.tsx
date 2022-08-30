import type { AppProps } from "next/app";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const { chains, provider, webSocketProvider } = configureChains(
		[chain.polygonMumbai],
		[alchemyProvider(), publicProvider()]
	);

	const wagmiClient = createClient({
		connectors: [
			new MetaMaskConnector({ chains }),
			new WalletConnectConnector({
				chains,
				options: {
					qrcode: true,
				},
			}),
			new InjectedConnector({
				chains,
				options: {
					name: "Injected",
					shimDisconnect: true,
				},
			}),
		],
		provider,
		webSocketProvider,
	});
	return (
		<WagmiConfig client={wagmiClient}>
			<Component {...pageProps} />
		</WagmiConfig>
	);
}

export default MyApp;
