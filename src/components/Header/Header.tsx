/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Header.module.sass';

import image from '../../images/logo.svg'

const Header: React.FC = () => {
	return (
		<header className={style.header} id="Header">
			<Container>
				<Row className="align-items-center">
					<Col className="d-flex justify-content-between">
						<div className={style.divImage}>
							<img src={image} alt="" className={style.image}/>
						</div>

					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
