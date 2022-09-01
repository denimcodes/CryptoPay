import { useWeb3React } from "@web3-react/core";
import { Alchemy, Network } from "alchemy-sdk";
import { debounce } from "lodash";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { UNSDomain } from "../domain";
import avatar from "../public/avatar.png";
import Button from "./Button";

interface ProfileFormProps {
	name: string;
}

const ProfileForm: React.FC<ProfileFormProps> = (props) => {
	const toAddress = "0xDda3805Dee86cA59DEc3A1010eFC94BFc69563eF";
	const { account } = useWeb3React();

	const [amount, setAmount] = useState(0);
	const [walletAddress, setWalletAddress] = useState("");

	const [fromAddress, setFromAddress] = useState<string | null>(null);
	const [balance, setBalance] = useState<string | null>(null);

	const DOMAIN_BASE_URL = "https://unstoppabledomains.g.alchemy.com/domains";

	const alchemySettings = {
		apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
		network: Network.MATIC_MUMBAI,
	};
	const alchemy = new Alchemy(alchemySettings);

	const getMaticBalance = (hexBalance: string) => {
		return (parseInt(hexBalance, 16) / Math.pow(10, 18)).toFixed(2);
	};

	const fetchDomain = (url: string) =>
		fetch(`${DOMAIN_BASE_URL}/${url}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
			},
		})
			.then((res) => res.json())
			.then((data) => data as UNSDomain)
			.then((unsDomain) => {
				const address = unsDomain.records["crypto.MATIC.version.MATIC.address"];
				setFromAddress(address);
				alchemy.core.getBalance(address).then((value) => {
					setBalance(getMaticBalance(value._hex));
				});
			})
			.catch((err) => {
				setFromAddress(null);
				setBalance(null);
			});

	fetchDomain(walletAddress);

	const updateWalletAddress = (e: ChangeEvent<HTMLInputElement>) => {
		setWalletAddress(e?.target?.value);
	};

	const debounceOnChangeWalletAddress = debounce(updateWalletAddress, 1000);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(`from: ${account}\n to: ${toAddress}\n value: ${amount}`);
	};

	return (
		<div className="shadow-md card">
			<div className="flex flex-col items-center card-body">
				{/* avatar */}
				<div className="avatar">
					<div className="w-20 h-20 rounded-full">
						<Image src={avatar} layout="intrinsic" alt="" />
					</div>
				</div>
				<div className="space-y-1 text-center">
					<h3 className="text-2xl font-medium">{props.name}</h3>
					<p className="w-64 text-lg leading-tight text-gray-600">
						Hello I am Denim and this is my CryptoPay link.
					</p>
				</div>
				<form
					className="flex flex-col gap-4 mt-16 w-80"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col gap-2">
						<label
							className="inline-block text-sm font-medium"
							htmlFor="wallet-address"
						>
							Wallet address / UNS Domain
						</label>
						<input
							type="text"
							name="wallet-address"
							id="wallet-address"
							className="border-gray-500 rounded-md input input-bordered"
							onChange={debounceOnChangeWalletAddress}
						/>
					</div>
					<div>
						{fromAddress && (
							<p>
								<span className="font-bold">Address: </span>
								{fromAddress}
							</p>
						)}
						{balance && (
							<p>
								<span className="font-bold">Balance: </span>
								{balance} Matic
							</p>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label
							className="inline-block text-sm font-medium"
							htmlFor="amount"
						>
							Select network
						</label>
						<select className="border-gray-200 rounded-md select select-bordered">
							<option value="ethereum">Ethereum</option>
							<option value="polygon">Polygon</option>
						</select>
					</div>

					<div className="flex flex-col gap-2">
						<label
							className="inline-block text-sm font-medium"
							htmlFor="amount"
						>
							Amount
						</label>
						<input
							className="border-gray-200 rounded-md input input-bordered"
							type="number"
							name="amount"
							min="0"
							id="amount"
							onChange={(e) => setAmount(Number(e.target.value))}
							placeholder="Enter amount"
						/>
					</div>
					<div className="justify-end card-actions">
						<Button type="submit">Send</Button>
					</div>
					{/* <div>
					<label
						htmlFor="wallet-modal"
						className="float-right rounded-md btn modal-button"
					>
						Send
					</label>
					<input type="checkbox" id="wallet-modal" className="modal-toggle" />
					<div className="modal">
						<div className="relative modal-box">
							<label
								htmlFor="wallet-modal"
								className="absolute btn btn-sm btn-circle right-2 top-2"
							>
								✕
							</label>
							<h3 className="mb-6 text-lg font-bold">Choose wallet</h3>
							<div className="flex flex-col items-center gap-4">
								<ConnectWalletButton />
								<div className="divider">OR</div>
								<div className="flex flex-col w-full gap-2">
									<label
										className="inline-block text-sm font-medium"
										htmlFor="uns-domain"
									>
										UNS Domain
									</label>
									<input
										className="border-gray-200 rounded-md input input-bordered"
										type="text"
										name="uns-domain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				</form>
			</div>
		</div>
	);
};

export default ProfileForm;
