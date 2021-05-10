/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileIcon from '../../UI/FileIcon';
import CalendarIcon from '../../UI/CalendarIcon';
import style from './MainArticle.module.sass';

export interface MainArticleProps {
	title: string;
	date: string;
	type: string;
	image: string;
}

const MainArticle: React.FC<MainArticleProps> = ({ children, title, date, type, image }) => {
	return (
		<Row className={style.articleRow}>
			<Col>
				<img className={style.image} src={image} alt="articleImage" />
			</Col>
			<Col>
				<div className={style.infoContainer}>
					<a className={cx(style.title, 'textSemibold')} href="#">
						{title}
					</a>
					<div className="d-flex textSemibold">
						<div className={style.info}>
							<CalendarIcon size={[17, 18]} />
							<span>{date}</span>
						</div>
						<div className={style.info}>
							<FileIcon size={[17, 18]} />
							<span>{type}</span>
						</div>
					</div>
					<div className={style.description}>{children}</div>
				</div>
			</Col>
		</Row>
	);
};

export default MainArticle;
