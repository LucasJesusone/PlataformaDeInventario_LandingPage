import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import s from './About.module.sass';
import internetIcon from '../../images/internet-icon.png';
import transferIcon from '../../images/transfer-icon.png';
import headIcon from '../../images/head-icon.png';


const About: React.FC = () => {
	return (
		<Container className="article-container" id="About">
			<Title title="IMPLEMENTAÇÃO">
			</Title>
			<Row className="space-around">
				<Col sm={3} xs={12}>
					<div className={s.aboutItem}>
						<img src={internetIcon} alt="internetIcon" />
						<div className={cx(s.title, 'textSemibold')}>LEVANTAMENTO DE REQUISITOS</div>
	
					</div>
				</Col>
				<Col sm={8} xs={12}>
					<div className={s.aboutItem}>
						<img src={transferIcon} alt="transferIcon" />
						<div className={cx(s.title, 'textSemibold')}>IMPLEMENTAÇÕES DE SERVIÇOS/INTEGRAÇÕES SAP</div>
					</div>
				</Col>
				<Col sm={8} xs={1} >
					<div className={s.aboutItem}>
						<img src={headIcon} alt="headIcon" />
						<div className={cx(s.title, 'textSemibold')}>FASE DE TESTES </div>
					
					</div>
				</Col>
				<Col sm={4} xs={12} >
					<div className={s.aboutItem}>
						<img src={headIcon} alt="headIcon" />
						<div className={cx(s.title, 'textSemibold')}>GO-LIVE EM PRODUÇÃO</div>
					
					</div>
				</Col>
			</Row>
		
		</Container>
	);
};

export default About;
