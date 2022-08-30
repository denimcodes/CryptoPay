import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Header from "../components/Header";
import heroImage from "../public/hero.svg";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>CryptoPay</title>
			</Head>

			<div className="flex flex-col h-screen">
				<Header />
				<main className="flex-1 h-full">
					{/* Hero */}
					<section className="container h-full px-6 mx-auto md:px-1">
						<div className="flex items-center h-full gap-4">
							<div className="w-1/2 space-y-4">
								<h2 className="text-6xl font-bold">
									Share link and get paid across blockchains
								</h2>
								<p className="text-lg">
									CryptoPay is a platform to create crypto payments profile and
									get paid across different blockchains
								</p>
								<div>
									<Link href="/create">
										<a>
											<Button>Create profile</Button>
										</a>
									</Link>
								</div>
							</div>
							<div className="w-1/2">
								<Image
									src={heroImage}
									alt=""
									width="260"
									height="260"
									layout="responsive"
								/>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default Home;
