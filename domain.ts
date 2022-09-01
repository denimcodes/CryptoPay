export interface UNSDomain {
	meta: Meta;
	records: Records;
}

export interface Meta {
	blockchain: string;
	domain: string;
	networkId: number;
	owner: string;
	registry: string;
	resolver: string;
}

export interface Records {
	"crypto.ETH.address": string;
	"crypto.MATIC.version.ERC20.address": string;
	"crypto.MATIC.version.MATIC.address": string;
}
