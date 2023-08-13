import { FC } from 'react'
import { Link } from 'react-router-dom'

const Navigation: FC = () => {
	return (
		<nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-blue-950 text-blue-200 rounded-md'>
			<h3 className='font-bold'>GitHub Search</h3>

			<span>
				<Link to='/' className='mr-2'>
					Home
				</Link>
				<Link to='/favorites'>Favorites</Link>
			</span>
		</nav>
	)
}

export default Navigation
