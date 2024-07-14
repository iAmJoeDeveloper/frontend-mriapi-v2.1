const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className='py-2 px-6 text-center text-black bg-white rounded-md hover:bg-gray-400'
		>
			{props.name}
		</button>
	)
}

export default Button
