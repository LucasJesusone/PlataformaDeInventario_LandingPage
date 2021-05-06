/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames';
import style from './Blog.module.sass';
import Container from 'react-bootstrap/Container';
import Title from '../Title';
import BlogArticle from './BlogArticle';
import { BlogArticleProps } from './BlogArticle/BlogArticle';
import image from '../../images/image--017.png';
import image1 from '../../images/image--014.png';
import image2 from '../../images/image--023.png';
import image3 from '../../images/image2.png';
import Row from 'react-bootstrap/Row';
// import Button from '../UI/Button';
import Col from 'react-bootstrap/Col';

interface BlogComponent {
	Article: React.FC<BlogArticleProps>;
}

const Blog: React.FC & BlogComponent = () => {
	return (
		<>
			<div className={cx(style.blogContainer, 'article-container')} id="Blog">
				<Container>
				
					<Row className={style.image1}>
							<img src={image1} alt="" width="600" />

					</Row>
					<Row className={style.image} >
						<img src={image} alt="" width="280" />
						<Title
						title="ABERTURA DE 
						INVENTÁRIO"
					>
						<strong>Faça abertura/encerramento dos inventários</strong> diretamente do SAP{' '}
						<strong>100% integrado</strong> com a aplicação mobile MINV
					</Title>
					</Row>

					{/* <Row>
					<Col>
						<div className={cx(s.linkContainer, 'd-flex', 'justify-content-center')}>
							<Button square green big link>
								More View
							</Button>
						</div>
					</Col>
				</Row> */}
				</Container>
			</div>
			<div className={cx(style.blogContainer, 'article-container')} id="Blog">
				<Container>
					<Row>
						<Row md={7} className={style.image3}>
							<img src={image3} alt="" width="280" height="500" />
						</Row>
						<Col md={5} className={style.image2}>
							<img src={image2} alt="" width="280" />
							
						</Col>
						<Title title="CRIAÇÃO DE
						OPERAÇÃO">
							<strong>Crie Facilmente operações de</strong><br/><strong>inventário/baixa</strong> utilizando o leitor <br/>de código de barras
						</Title>
					</Row>
					{/* <Row>
					<Col>
						<div className={cx(s.linkContainer, 'd-flex', 'justify-content-center')}>
							<Button square green big link>
								More View
							</Button>
						</div>
					</Col>
				</Row> */}
				</Container>
			</div>
		</>
	);
};

Blog.Article = BlogArticle;

export default Blog;
