/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames';
import style from './Main.module.sass';
import Container from 'react-bootstrap/Container';
import Title from '../Title';
import image from '../../images/image--017.png';
import image1 from '../../images/image--014.png';
import image2 from '../../images/image--023.png';
import image3 from '../../images/image2.png';
import image4 from '../../images/image--026.png';
import image5 from '../../images/image--029.png';
import image6 from '../../images/image--032.png';
import image7 from '../../images/image--033.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainArticle, { MainArticleProps } from './MainArticle/MainArticle';

interface MainComponent {
	Article: React.FC<MainArticleProps>;
}

const Main: React.FC & MainComponent = () => {
	return (
		<>
			<div className={cx(style.mainContainer, 'article-container')} id="Blog">
				<Container>
					<Row className={style.image1}>
						<img src={image1} alt="" width="600" />
					</Row>
					<Row className={style.image}>
						<img src={image} alt="" width="300" />
						<div>
						<Title
							title="ABERTURA DE INVENTÁRIO"
						>
							<strong>Faça abertura/encerramento dos inventários</strong> diretamente do SAP{' '}
							<strong>100% integrado</strong> com a aplicação mobile MINV
						</Title>
						</div>
					</Row>

				</Container>
			</div>
			<div className={cx(style.mainContainer, 'article-container')} id="Blog">
				<Container>
					<Row>
						<Row md={7} className={style.image3}>
							<img src={image3} alt="" width="280" height="500" />
						</Row>
						<Col md={5} className={style.image2}>
							<img src={image2} alt="" width="280" />
						</Col>
						<Title
							title="CRIAÇÃO DE
						OPERAÇÃO"
						>
							<strong>Crie Facilmente operações de</strong>
							<br />
							<strong>inventário/baixa</strong> utilizando o leitor <br />
							de código de barras
						</Title>
					</Row>
	
				</Container>
			</div>
			<div className={cx(style.mainContainer, 'article-container')} id="Blog">
				<Container>
					<Row>
						<Row md={7} className={style.image4}>
							<img src={image5} alt="" width="280" height="500" />
						</Row>
						<Col md={4} className={style.image5}>
							<img src={image4} alt="" width="280" />
						</Col>
						<Title title="LEITOR DE CÓDIGO DE BARRAS">
							<strong>Crie Facilmente operações de</strong>
							<br />
							<strong>inventário/baixa</strong> utilizando o leitor <br />
							de código de barras
						</Title>
					</Row>
		
				</Container>
			</div>
			<div className={cx(style.mainContainer, 'article-container')} id="Blog">
				<Container>
					<Title title="ACOMPANHAMENTO DE OPERAÇÃO"></Title>
					<Row>
						<Col md={5} className={style.image6}>
							<img src={image6} alt="" width="1200" />
						</Col>

						<Row md={7} className={style.image7}>
							<img src={image7} alt="" width="750" height="500" />
						</Row>
						<Col md={3} className={style.title}>
							<Title title="">
								<strong>Acompanhe todas operações</strong> que são feitas no aplicativo diretamente do SAP
								<Title title="">
									Veja <strong>quais dados foram modificados </strong> no momento da operação.
								</Title>
							</Title>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

Main.Article = MainArticle

export default Main;
