import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="services">
        <h2>Plataforma de Inventário</h2>
        <div className="service-column">
          <h2>INTERFACE AMIGÁVEL</h2>
          <span>
            {" "}
            <p>
              O app Minv foi construído para ser fácil e simples em qualquer app
            </p>
          </span>
        </div>
        <div className="service-column">
          <h2>100% INTEGRADO</h2>
          <span>
            {" "}
            <p>
              Construímos todas interfaces no seu SAP para você não se preocupar
              com integrações{" "}
            </p>
          </span>
        </div>
        <div className="service-column">
          <h2>SUPORTE OFFLINE</h2>
          <span>
            {" "}
            <p>
              Realize o inventário em áreas sem acesso à internet e quando
              estiver online, integre facilmente os dados
            </p>
          </span>
        </div>
        <div className="service-column">
          <h2>USUÁRIOS ILIMITADOS</h2>
          <span>
            <p>
              Disponibilizamos quantos usuários você precisar, sem limitações
            </p>
          </span>
        </div>
        <div className="service-column">
          <h2>RELATÓRIOS</h2>
          <span>
            <p>
              {" "}
              Todos relatórios podem ser extraídos diretamente do SAP em tempo
              real
            </p>
          </span>
        </div>
        <div className="div">
      <span>
        <h1>
          Abertura <br />
          de Inventário
        </h1>
      </span>

      <span>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Modi
          eos quis consequatur cumque exercitationem <br /> praesentium aut,
          earum doloribus? Sunt quis consequatur corrupti <br /> adipisci fugiat
          facilis sit quas, nisi porro accusamus.
        </p>
      </span>
    </div>
      </div>
    </>
  );
};

export default Header;
