import { useActions } from '../hooks/actions'

const FavoriteCard = ({ fav }: any) => {
	const { removeFavorite } = useActions()

	const deleteFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		removeFavorite(fav)
	}
	return (
		<div
			className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-blue-100 transition-all'
			key={fav}
		>
			<a href={fav} target='_blank' rel='noreferrer'>
				{fav}
			</a>
			<div>
				<button
					className='mt-1 py-2 px-4 bg-blue-700 text-blue-200 rounded hover:shadow-md transition-all'
					onClick={deleteFromFavorite}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default FavoriteCard
