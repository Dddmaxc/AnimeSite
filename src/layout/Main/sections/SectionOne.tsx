import Flickity from 'react-flickity-component'
import s from './sectionOne.module.css'
import naruto from '../../../assets/images/naruto.jpg'
import Attack_on_Titan from '../../../assets/images/Attack_on_Titan.jpg'
import Fullmetal_Alchemist from '../../../assets/images/Fullmetal_Alchemist.jpg'
import One_Piece from '../../../assets/images/One_Piece.jpg'
import Death_Note from '../../../assets/images/Death_Note.jpg'
import Bleach from '../../../assets/images/Bleach.jpg'
import Cyberpunk from '../../../assets/images/Cyberpunk.jpg'
import Code_Geass from '../../../assets/images/Code_Geass.jpg'
export const flickyOptions = {
	initialIndex: 2,
}

const anime = {
	id: [1, 2, 3, 4, 5, 6, 7, 8],
	// title: [
	// 	'Naruto',
	// 	'Attack on Titan',
	// 	'Fullmetal Alchemist',
	// 	'One Piece',
	// 	'Death Note',
	// 	'Bleach',
	// 	'Cyberpunk: Edgerunners',
	// 	'Code Geass',
	// ],
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
		<div>
			<Flickity
				className={s.Slider}
				disableImagesLoaded={false}
				elementType='div'
				options={flickyOptions}
				reloadOnUpdate
				static
			>
				{anime['id'].map((i, index) => {
					return (
						<div key={i} className={s.Plate} style={{ borderRadius: '15px' }}>
							<>
								{/* <h2>{anime['title'][i - 1]}</h2> */}
								<div
									style={{
										backgroundImage: `url(${anime['images'][i - 1]})`,
										width: '108%',
										height: '172px',
										backgroundSize: 'cover',
										borderRadius: '15px',
									}}
								></div>
							</>
						</div>
					)
				})}
			</Flickity>
		</div>
	)
}
