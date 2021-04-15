import React from "react";
import "./ReaderComponente.scss";

const Reader = () => {
  return (
    <div className="readerMain">
      <div className="readerStyle">
        <h1>
         Leitor de <br/>
         Código de <br/>
         barras
        </h1>
        <span >
          <p>
                <strong>Utilize a câmera do celular/tablet</strong><br/> para realizar a leitura dos identificadores
          </p>

          <p>
                caso o item não seja encontrado <br/> na sua base de ativos, não se preocupe, <strong>você pode cria- <br/>los</strong>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Reader;
