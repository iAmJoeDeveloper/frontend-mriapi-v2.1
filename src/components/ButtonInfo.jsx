const ButtonInfo = (props) => {
	return (
		<button
			onClick={props.onClick}
			className='py-2 px-6 text-center text-sky-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-sky-500/10 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-sky-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100'
		>
			{props.name}
		</button>
	)
}

export default ButtonInfo
