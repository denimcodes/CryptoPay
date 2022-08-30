import { UAuthConnector } from "@uauth/web3-react";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import { uauth } from "../connectors";
import unstoppableIcon from "../public/unstoppable.svg";

const ConnectWalletButton = () => {
	const { connector, activate, account, deactivate } = useWeb3React();
	const [uDomain, setUDomain] = useState<string | null>(null);

	useEffect(() => {
		if (!connector) return;

		const resolveUDomain = async () => {
			if (connector instanceof UAuthConnector) {
				const { sub } = await (connector as UAuthConnector).uauth.user();
				setUDomain(sub);
			}
		};

		resolveUDomain();
	}, [connector]);

	const handleLogin = async () => {
		await activate(uauth);
	};

	if (account) {
		return (
			<div className="dropdown">
				<label tabIndex={0} className="m-1 rounded-md btn">
					{uDomain ?? account.substring(0, 8)}
				</label>
				<ul
					tabIndex={0}
					className="px-4 py-2 shadow cursor-pointer dropdown-content menu bg-base-100 rounded-box w-52 hover:bg-gray-100"
				>
					<li onClick={() => deactivate()}>Disconnect</li>
				</ul>
			</div>
		);
	}

	return (
		<>
			<label
				htmlFor="connect-wallet-modal"
				className="rounded-md btn modal-button btn-primary hover:bg-gray-800"
			>
				Connect wallet
			</label>
			<input
				type="checkbox"
				id="connect-wallet-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="relative modal-box">
					<label
						htmlFor="connect-wallet-modal"
						className="absolute btn btn-sm btn-circle right-2 top-2"
					>
						✕
					</label>
					<h3 className="mb-8 text-lg font-bold">Choose wallet</h3>
					<div>
						<ul className="flex flex-col gap-3 text-center cursor-pointer">
							<li className="rounded-md btn btn-outline">MetaMask</li>
							<li className="rounded-md btn btn-outline">WalletConnect</li>
							<li
								className="px-6 py-1 font-medium bg-[#0d67fe] hover:bg-[#0546b7] active:bg-[#478bfe] rounded-md text-white"
								onClick={handleLogin}
							>
								<div className="flex items-center justify-center gap-1">
									<Image src={unstoppableIcon} width="48" height="48" alt="" />
									Login with Unstoppable
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConnectWalletButton;
