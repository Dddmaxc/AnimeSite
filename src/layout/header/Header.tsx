import s from './header.module.css'

export const Header = () => {
	return (
		<>
			<section>
				<header>
					<div className={s.headerBoxContainer}>
						<nav className={s.headerBoxOne}>
							<a href='#'>
								<img
									className={s.iconLogIn}
									src={require('../../assets/icons/logIn.png')}
									alt='Log In'
								/>
							</a>
							<div className={s.BoxForU}>For you</div>
							<div className={s.BoxLibrary}>Library</div>
						</nav>
						<div className={s.headerBoxTwo}>
							<div>
								<a href='#'>
									<img
										className={s.search}
										src={require('../../assets/icons/search.png')}
										alt='Search'
									/>
								</a>
							</div>
							<div>
								<a href='#'>
									<img
										className={s.settings}
										src={require('../../assets/icons/settings.png')}
										alt='Settings'
									/>
								</a>
							</div>
						</div>
					</div>
				</header>
				<video
					autoPlay
					muted
					loop
					id='MyVideo'
					src={require('../../assets/video/videophone.mp4')}
				></video>
			</section>
		</>
	)
}
