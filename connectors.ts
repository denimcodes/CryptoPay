import { UAuthConnector } from "@uauth/web3-react";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({ supportedChainIds: [80001] });

export const walletconnect = new WalletConnectConnector({
	qrcode: true,
});

export const uauth = new UAuthConnector({
	clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
	redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,
	scope: "openid wallet",
	connectors: { injected, walletconnect },
});

const connectors: Record<string, AbstractConnector> = {
	injected,
	walletconnect,
	uauth,
};

export default connectors;
