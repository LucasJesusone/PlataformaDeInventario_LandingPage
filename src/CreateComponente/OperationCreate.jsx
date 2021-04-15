import React from "react";

import "./OperationCreate.scss";

const Inventory = () => {
  return (
    <div className="operationCreate">
      <div className="styleCreate">
        <h1>
          Criação <br />
          de Operação
        </h1>
        <span>
          <p>
            <strong>Crie facilmente operações de inventário/baixa</strong>
            <br />
            ultilizando o leitor de código de barras.
          </p>

          <p>
            <strong>Cadastre/modifique itens</strong> no momento da leitura e{" "}
            <br />
            depois veja os campos modificados no <strong>SAP</strong>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Inventory;
