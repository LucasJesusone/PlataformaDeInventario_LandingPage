import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from '../Title';
import ServicesCard from './ServicesCard';
import { ServicesCardProps } from './ServicesCard/ServicesCard';
import style from './Services.module.scss';

interface ServicesComponent {
	Card: React.FC<ServicesCardProps>;
}

const Services: React.FC & ServicesComponent = () => {
	return (
		<div className={cx(style.serviceContainer, 'article-container')} id="Services">
			<Container>
				<Title title="PLATAFORMA DE INVENTÁRIO">
				</Title>
				<Row>
					<Services.Card title="Interface Amigável">
						O aplicativo Minv foi construido para ser simples e fácil de utilizar em qualquer aparelho <strong>Android</strong>
					</Services.Card>
					<Services.Card title="100% Integrado">
						Construímos todas interfaces no seu SAP para você não se preocupar com integrações.
					</Services.Card>
					<Services.Card title="Suporte Offline">
						Realize o inventário em áreas sem acesso à internet e quando estiver online, integre facilmente os dados.
					</Services.Card>
					<Services.Card title="Usuários Ilimitados">
						 Disponibilizamos quantos usuários for necessários, sem limitações
					</Services.Card>
					<Services.Card title="Relatórios">
						Relatórios podem ser extraídos diretamente do SAP em tempo real.
					</Services.Card>
				</Row>
			</Container>
		</div>
	);
};

Services.Card = ServicesCard;

export default Services;
