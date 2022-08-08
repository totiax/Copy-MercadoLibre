import React from "react";
import "../assets/css/Accesories.css";

export default function Accesories() {
  return (
    <>
      <div className="orPai">
        <div className="Pai">
          <div className="effect">
            <div className="credito">
              <div className="Im">
                <img
                  src="	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
                  alt=""
                />
              </div>
              <div className="desc">
                <a href="" className="titulo">
                  Tarjeta de credito
                </a>
                <div className="desc2">
                  <a href="" className="more">
                    Ver promociones bancarias
                  </a>
                </div>
              </div>
            </div>
            <div className="debito">
              <div className="Im">
                <img
                  src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg"
                  alt=""
                />
              </div>
              <div className="desc">
                <a href="" className="titulo">
                  Tarjeta de debito
                </a>
                <div className="desc2">
                  <a href="" className="more">
                    Ver mas
                  </a>
                </div>
              </div>
            </div>
            <div className="Starjeta">
              <div className="Im">
                <img
                  src="	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
                  alt=""
                />
              </div>
              <div className="des">
                <a href="" className="titulo">
                  Cuotas sin tarjeta
                </a>
                <div className="desc2">
                  <a href="" className="more">
                    Conoce mercado credito
                  </a>
                </div>
              </div>
            </div>
            <div className="Efectivo">
              <div className="Im">
                <img
                  src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg"
                  alt=""
                />
              </div>
              <div className="desc">
                <a href="" className="titulo">
                  Efectivo
                </a>
                <div className="desc2">
                  <a href="" className="more">
                    Ver mas
                  </a>
                </div>
              </div>
            </div>
            <div className="image">
              <img
                src="	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
