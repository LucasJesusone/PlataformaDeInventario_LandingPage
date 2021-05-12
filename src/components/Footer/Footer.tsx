import React from 'react';
import style from './Footer.module.sass';

const Footer: React.FC = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<div className={style.footer} >
				<span className="textBold"> Todos os direitos Reservados © {year}</span>
			</div>
			<div className={style.footer} >
				<span className="textBold">eniorj1@hotmail.com</span>
			</div>
		</>
	);
};

export default Footer;
