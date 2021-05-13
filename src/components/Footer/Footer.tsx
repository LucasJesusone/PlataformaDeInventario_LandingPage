/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './Footer.module.sass';
import { AiOutlineMail,} from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';


const Footer: React.FC = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<div className={style.footer}>
				<span className="textBold"> Todos os direitos Reservados © {year}</span>
			</div>
			{/* <span className={style.contact}>Entre em Contato</span> */}
			<div className={style.footer}>
				
				<a className={style.icon} href="mailto:eniorj1@hotmail.com?body=Olá, Tudo bem ?">
					<AiOutlineMail size={40} title="Email" />
				</a>
				<a className={style.icon} href="https://www.linkedin.com/in/eniorafael/">
					<FiLinkedin size={37} />
				</a>
			</div>
		</>
	);
};

export default Footer;
