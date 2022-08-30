import { useAccount, useConnect, useDisconnect } from "wagmi";

const ConnectWalletButton = () => {
	const { address, isConnected, connector } = useAccount();
	const { connect, connectors, error, isLoading, pendingConnector } =
		useConnect();
	const { disconnect } = useDisconnect();

	if (isConnected) {
		return (
			<div>
				<div>{address}</div>
				<div>Connected to {connector!.name}</div>
				<button onClick={() => disconnect()}>Disconnect</button>
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
					<h3 className="text-lg font-bold">Choose wallet</h3>
					<div className="flex flex-col gap-4">
						{connectors.map((connector) => (
							<button
								disabled={!connector.ready}
								key={connector.id}
								onClick={() => connect({ connector })}
							>
								{connector.name}
								{!connector.ready && " (unsupported)"}
								{isLoading &&
									connector.id === pendingConnector?.id &&
									" (connecting)"}
							</button>
						))}

						{error && <div>{error.message}</div>}
					</div>
				</div>
			</div>
		</>
	);
};

export default ConnectWalletButton;
