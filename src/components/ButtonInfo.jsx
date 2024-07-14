const ButtonInfo = (props) => {
	return (
		<button
			onClick={props.onClick}
			className='py-2 px-6 text-center text-sky-600 bg-sky-200 bg-opacity-50 rounded-md hover:bg-sky-300'
		>
			{props.name}
		</button>
	)
}

export default ButtonInfo
