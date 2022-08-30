import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const getLibrary = (provider: any) => {
	return new providers.Web3Provider(provider);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<Component {...pageProps} />
		</Web3ReactProvider>
	);
}

export default MyApp;
