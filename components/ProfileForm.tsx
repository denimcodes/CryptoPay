import Button from "./Button";

interface ProfileFormProps {
	name: string;
}

const ProfileForm: React.FC<ProfileFormProps> = (props) => {
	return (
		<div className="flex flex-col items-center gap-4 px-4 py-4 shadow-md rounded-md">
			{/* avatar */}
			<div className="h-24 w-24 rounded-[3rem] bg-gray-200"></div>
			<h3 className="text-xl font-medium">{props.name}</h3>
			<form className="mt-16 flex flex-col gap-4 w-64">
				<div className="flex flex-col gap-2">
					<label className="inline-block font-medium text-sm" htmlFor="amount">
						Amount
					</label>
					<input
						className="px-4 py-2 border-gray-200 border-2 rounded-md"
						type="number"
						name="amount"
						id="amount"
						placeholder="Enter amount"
					/>
				</div>
				<Button>Send</Button>
			</form>
		</div>
	);
};

export default ProfileForm;
