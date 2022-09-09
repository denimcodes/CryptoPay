import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			className={`rounded-md btn btn-primary hover:bg-gray-800 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
