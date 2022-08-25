import Button from "./Button";

const Header = () => {
	return (
		<header>
			<div className="container mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-bold">CryptoPay</h1>
					<Button>Connect wallet</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
