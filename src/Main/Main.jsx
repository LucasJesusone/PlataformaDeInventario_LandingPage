import React from "react";
import './Main.scss'

const Main = () => {
  return (
    <div className='services'>
      <div className="service-column">
        <h2>INTERFACE AMIGÁVEL</h2>
        <p>
          O app Minv foi construído para ser fácil e simples em qualquer app
        </p>
      </div>
      <div className="service-column" >

        <h2>100% INTEGRADO</h2>
        <p>
        Construímos todas interfaces no seu SAP para você não se preocupar com integrações
        </p>
      </div>
      <div className="service-column">

        <h2>SUPORTE OFFLINE</h2>
        <p>
        Realize o inventário em áreas sem acesso à internet e quando estiver online, integre facilmente os dados
        </p>
      </div>
      <div className="service-column">

        <h2>USUÁRIOS ILIMITADOS</h2>
        <p>
        Disponibilizamos quantos usuários você precisar, sem limitações
        </p>
      </div>
      <div className="service-column">

        <h2>RELATÓRIOS</h2>
        <p>
        Todos relatórios podem ser extraídos diretamente do SAP em tempo real
        </p>
      </div>
    </div>
    
  );
};

export default Main;
