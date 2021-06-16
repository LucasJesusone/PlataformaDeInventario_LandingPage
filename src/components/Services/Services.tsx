import React, { useState } from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ServicesCard from './ServicesCard';
import { ServicesCardProps } from './ServicesCard/ServicesCard';
import style from './Services.module.scss';
import { useEffect } from 'react';

const Fade = require('react-reveal/Fade');

interface ServicesComponent {
	Card: React.FC<ServicesCardProps>;
}

const Services: React.FC & ServicesComponent = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 768) {
			setIsDesktop(true);
			setIsMobile(false);
		} else {
			setIsMobile(false);
			setIsDesktop(true);
		}
	}, []);

	return (
		<div className={cx(style.serviceContainer, 'article-container')} id="Services">
			<Container>
				<Fade left={isDesktop} right={isMobile} duration={2000} delay={500}>
					<Row>
						<Services.Card title="Interface Amigável">
							O aplicativo Minv foi construido para ser simples e fácil de utilizar em qualquer aparelho{' '}
							<strong>Android</strong>
						</Services.Card>

						<Services.Card title="100% Integrado">
							Construímos todas interfaces no seu SAP para você não se preocupar com integrações.
						</Services.Card>
						<Services.Card title="Suporte Offline">
							Realize o inventário em áreas sem acesso à internet e quando estiver online, integre facilmente os
							dados.
						</Services.Card>
						<Services.Card title="Usuários Ilimitados">
							Disponibilizamos quantos usuários for necessários, sem limitações
						</Services.Card>
						<Services.Card title="Relatórios">
							Relatórios podem ser extraídos diretamente do SAP em tempo real.
						</Services.Card>
					</Row>
				</Fade>
			</Container>
		</div>
	);
};

Services.Card = ServicesCard;

export default Services;
