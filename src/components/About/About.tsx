import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import style from './About.module.sass';
import internetIcon from '../../images/internet-icon.png';
import implementation from '../../images/implementation.png';
import headIcon from '../../images/tests.png';
import production from '../../images/production.png';



const About: React.FC = () => {
	return (
		<Container className={"article-container"} id="About">
			<Title title="IMPLEMENTAÇÃO">
			</Title>
			<Row className="space-around">
				<Col sm={3} xs={12}>
					<div className={style.aboutItem}>
						<img src={internetIcon} alt="internetIcon" />
						<div className={cx(style.title, 'textSemibold')}>LEVANTAMENTO DE REQUISITOS</div>
	
					</div>
				</Col>
				<Col sm={8} xs={12}>
					<div className={style.aboutItem}>
						<img src={implementation} alt="transferIcon" />
						<div className={cx(style.title, 'textSemibold')}>IMPLEMENTAÇÕES DE SERVIÇOS/INTEGRAÇÕES SAP</div>
					</div>
				</Col>
				<Col sm={8} xs={1} >
					<div className={style.aboutItem}>
						<img src={headIcon} alt="headIcon" />
						<div className={cx(style.title, 'textSemibold')}>FASE DE TESTES </div>
					
					</div>
				</Col>
				<Col sm={4} xs={12} >
					<div className={style.aboutItem}>
						<img src={production} alt="headIcon" />
						<div className={cx(style.title, 'textSemibold')}>GO-LIVE EM PRODUÇÃO</div>
					
					</div>
				</Col>
			</Row>
		
		</Container>
	);
};

export default About;
