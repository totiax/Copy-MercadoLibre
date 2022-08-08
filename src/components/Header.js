import React from "react";
import "../assets/css/Header.css";

export default function Header() {
  return (
    <div className="box">
      <div className="order">
        <div className="left">
          <div className="OrLogo">
            <img
              className="logo"
              src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="center">
          <input type="text" />
          <div className="ordenBcenter">
            <nav>
              <a href="">Categoria</a>
              <a href="">Ofertas</a>
              <a href="">Historial</a>
              <a href="">Supermercado</a>
              <a href="">Moda</a>
              <a href="">Vender</a>
              <a href="">Ayuda</a>
            </nav>
          </div>
        </div>
        <div className="rigth">
          <img
            className="description"
            src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp"
            alt=""
          />
          <div className="ordenBright">
            <img src="" alt="" />
            <a href="">Nombre</a>
            <a href="">Mis compras </a>
            <a href="">Favoritos</a>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
