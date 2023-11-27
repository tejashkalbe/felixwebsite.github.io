/** @format */

const Blogs = () => {
	return (
		<>
			<div className=' w-[134px] h-[56px] mx-auto mt-10'>
				<h2 className='text-[#ed1c24] font-dm text-[52px] font-[700]'>Blogs</h2>
			</div>

			<div className='flex justify-center mt-16 items-center space-x-28 space-y-5 border border-red-500'>
				<select
					name=''
					id=''
					className='border border-black px-52 rounded-lg -ml-[25rem]'
				>
					<option value=''>Choose category</option>
				</select>
				<select name='' id='' className='border border-black px-16  rounded-lg'>
					<option value=''>Sort</option>
				</select>
			</div>
		</>
	)
}

export default Blogs
