import s from './sectionOne.module.css'
import naruto from '../../../assets/images/naruto.jpg'
import Attack_on_Titan from '../../../assets/images/Attack_on_Titan.jpg'
import Fullmetal_Alchemist from '../../../assets/images/Fullmetal_Alchemist.jpg'
import One_Piece from '../../../assets/images/One_Piece.jpg'
import Death_Note from '../../../assets/images/Death_Note.jpg'
import Bleach from '../../../assets/images/Bleach.jpg'
import Cyberpunk from '../../../assets/images/Cyberpunk.jpg'
import Code_Geass from '../../../assets/images/Code_Geass.jpg'

type AnimeType = {
	id: number[]
	images: string[]
}

export const flickyOptions = {
	initialIndex: 2,
}

const anime: AnimeType = {
	id: [1, 2, 3, 4, 5, 6, 7, 8],
	images: [
		naruto,
		Attack_on_Titan,
		Fullmetal_Alchemist,
		One_Piece,
		Death_Note,
		Bleach,
		Cyberpunk,
		Code_Geass,
	],
}

export const SectionOne = () => {
	return (
		<>
			<div className={s.containerImageAnime}>
				{anime.images.map((image, i) => (
					<div className={s.ImageAnime} key={anime.id[i]}>
						<img className={s.img} src={image} alt={`Anime ${i + 1}`} />
					</div>
				))}
			</div>
		</>
	)
}
