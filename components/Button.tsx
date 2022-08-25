interface ButtonProps {
	children: string | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<button className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-700">
			{children}
		</button>
	);
};

export default Button;
