import { SectionOne } from './sections/SectionOne'
import s from './Main.module.css'

export const Main = () => {
	return (
		<section className={s.container}>
			<SectionOne />
		</section>
	)
}
