import { Alchemy, Network } from "alchemy-sdk";
import { FormEvent, useState } from "react";
import { useAccount } from "wagmi";
import Button from "./Button";

interface ProfileFormProps {
	name: string;
}

const ProfileForm: React.FC<ProfileFormProps> = (props) => {
	const toAddress = "0xDda3805Dee86cA59DEc3A1010eFC94BFc69563eF";
	const { address } = useAccount();

	const [amount, setAmount] = useState(0);

	const alchemySettings = {
		apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
		network: Network.MATIC_MUMBAI,
	};
	const alchemy = new Alchemy(alchemySettings);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(`from: ${address}\n to: ${toAddress}\n value: ${amount}`);
	};

	return (
		<div className="flex flex-col items-center gap-4 px-4 py-4 rounded-md shadow-md">
			{/* avatar */}
			<div className="h-24 w-24 rounded-[3rem] bg-gray-200"></div>
			<h3 className="text-xl font-medium">{props.name}</h3>
			<form className="flex flex-col w-64 gap-4 mt-16" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2">
					<label className="inline-block text-sm font-medium" htmlFor="amount">
						Amount
					</label>
					<input
						className="px-4 py-2 border-2 border-gray-200 rounded-md"
						type="number"
						name="amount"
						min="0"
						id="amount"
						onChange={(e) => setAmount(Number(e.target.value))}
						placeholder="Enter amount"
					/>
				</div>
				<Button type="submit">Send</Button>
			</form>
		</div>
	);
};

export default ProfileForm;
