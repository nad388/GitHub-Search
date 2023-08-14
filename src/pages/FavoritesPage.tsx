import { FC } from 'react'
import FavoriteCard from '../components/FavoriteCard'
import { useAppSelector } from '../hooks/redux'

const FavoritesPage: FC = () => {
	const { favorites } = useAppSelector(state => state.github)

	if (favorites.length === 0) return <p className='text-center'>No items!</p>

	return (
		<div className='flex justify-center pt-10 mx-auto h-screen'>
			<div className='list-none '>
				{favorites?.map(fav => (
					<FavoriteCard fav={fav} key={fav} />
				))}
			</div>
		</div>
	)
}

export default FavoritesPage
