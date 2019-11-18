import React from 'react';
import iconFlechaAntBlanco from 'brandIcons/icon-flecha-ant-blanco.svg';
import iconCampanaBlanco from 'brandIcons/icon-campana-blanco.svg';

export const Header: React.FC = () => {
  return (
    <header className="app-header fixed-top navbar navbar-expand-xs">
      <div className="container">
        <img src={iconFlechaAntBlanco} alt="Volver" />
        <img src={iconCampanaBlanco} alt="Notificaciones" />
      </div>
    </header>
  );
};
