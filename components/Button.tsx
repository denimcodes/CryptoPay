import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className="rounded-md btn btn-primary" {...props}>
			{children}
		</button>
	);
};

export default Button;
