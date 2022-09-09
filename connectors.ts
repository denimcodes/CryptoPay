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

export interface Wallet {
	id: string;
	name: string;
	connector: AbstractConnector;
}

export const wallets = [
	{
		id: "metamask",
		name: "Metamask",
		connector: injected,
	},
	{
		id: "walletconnect",
		name: "Wallet Connect",
		connector: walletconnect,
	},
	{
		id: "uauth",
		name: "Login with Unstoppable",
		connector: uauth,
	},
];

export default wallets;
