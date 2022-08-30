import Button from "../../components/Button";
import Header from "../../components/Header";

const CreateProfilePage = () => {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<section className="flex-1 h-full">
				<div className="grid h-full place-content-center">
					<div className="p-6 shadow-md">
						<h3 className="mb-6 text-xl font-bold">Create profile</h3>
						<form className="flex flex-col gap-4">
							<div>
								<label
									htmlFor="avatar"
									className="block mb-2 text-sm font-medium"
								>
									Avatar
								</label>
								<input
									type="file"
									name="avatar"
									id="avatar"
									accept=".jpg, .png, .jpeg"
									className="h-10 border border-gray-200 rounded-md w-72"
								/>
							</div>
							<div>
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium"
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									required
									className="h-10 px-4 py-2 border border-gray-200 rounded-md w-72"
								/>
							</div>
							<div>
								<label
									htmlFor="twitter_username"
									className="block mb-2 text-sm font-medium"
								>
									Twitter username
								</label>
								<input
									type="text"
									name="twitter_username"
									id="twitter_username"
									className="h-10 px-4 py-2 border border-gray-200 rounded-md w-72"
								/>
							</div>
							<div>
								<label
									htmlFor="polygon_address"
									className="block mb-2 text-sm font-medium"
								>
									Polygon address
								</label>
								<input
									type="text"
									name="polygon_address"
									id="polygon_address"
									className="h-10 px-4 py-2 border border-gray-200 rounded-md w-72"
									required
								/>
							</div>
							<Button>Create</Button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CreateProfilePage;
