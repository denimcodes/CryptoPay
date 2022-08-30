import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";

const Header = () => {
	return (
		<header>
			<div className="container px-6 py-4 mx-auto md:px-0">
				<div className="flex items-center justify-between">
					<Link href="/">
						<h1 className="text-2xl font-bold cursor-pointer hover:text-gray-900">
							CryptoPay
						</h1>
					</Link>
					<ConnectWalletButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
