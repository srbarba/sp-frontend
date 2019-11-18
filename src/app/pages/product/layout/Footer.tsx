import React from 'react';
import iconPrepararPedidosBlanco from 'brandIcons/icon-preparar-pedidos-blanco.svg';
import iconDeshacerPedidosBlanco from 'brandIcons/icon-deshacer-pedidos-blanco.svg';
import iconBuscarBlanco from 'brandIcons/icon-buscar-blanco.svg';
import iconNuevoPedidoBlanco from 'brandIcons/icon-nuevo-pedido-blanco.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="app-footer fixed-bottom">
      <div className="container">
        <div className="d-flex flex-row align-items-stretch justify-content-between">
          <div className="px-2 py-3 align-self-end">
            <img src={iconPrepararPedidosBlanco} alt="Preparar Pedido" />
          </div>
          <div className="px-2 py-3 align-self-end">
            <img src={iconDeshacerPedidosBlanco} alt="Deshacer Pedido" />
          </div>
          <div className="px-2 py-3 align-self-end">
            <img src={iconBuscarBlanco} alt="Buscar" />
          </div>
          <div className="px-2 py-3 align-self-end">
            <img src={iconNuevoPedidoBlanco} alt="Carrito" />
          </div>
        </div>
      </div>
    </footer>
  );
};
