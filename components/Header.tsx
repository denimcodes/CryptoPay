import ConnectWalletButton from "./ConnectWalletButton";

const Header = () => {
	return (
		<header>
			<div className="container px-6 py-4 mx-auto">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">CryptoPay</h1>
					<ConnectWalletButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
