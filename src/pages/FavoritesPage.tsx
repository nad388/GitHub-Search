import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage: FC = () => {
	const { favorites } = useAppSelector(state => state.github)



	if (favorites.length === 0) return <p className='text-center'>No items!</p>


	return (
		<div className='flex justify-center pt-10 mx-auto h-screen'>
			<div className='list-none '>
				{favorites.map(f => (
					<div
						className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-blue-100 transition-all'
						key={f}
					>
						<a href={f} target='_blank' rel='noreferrer'>
							{f}
						</a>
						<div>
							<button className='mt-1 py-2 px-4 bg-blue-700 text-blue-200 rounded hover:shadow-md transition-all'>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FavoritesPage
