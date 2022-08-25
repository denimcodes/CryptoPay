import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";

const Home: NextPage = () => {
	const toAddress = "";

	return (
		<>
			<Head>
				<title>CryptoPay</title>
			</Head>
			<Header />
			<main>
				<section className="container mx-auto px-6">
					<ProfileForm name="dnmcodes.crypto" />
				</section>
			</main>
		</>
	);
};

export default Home;
