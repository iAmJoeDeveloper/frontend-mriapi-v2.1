const ButtonInfo = (props) => {
	return (
		<button
			onClick={props.onClick}
			className="py-2 px-6 text-center text-sky-600 bg-white rounded-md hover:bg-sky-300 hover:text-white font-bold"
		>
			{props.name}
		</button>
	);
};

export default ButtonInfo;
