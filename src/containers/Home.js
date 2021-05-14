import React, { useState, useEffect } from "react";
import { useAppContext } from "../libs/contextLib";

import "./Home.css";

export default function Home() {
  const { isAuthenticated } = useAppContext();

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
    }

    onLoad();
  }, [isAuthenticated]);

  function renderLander() {
    return (
      <div className="lander">
        <h1>Olá</h1>
        <p className="text-muted">Seja Bem-Vindo!</p>
        <p className="text-muted">Faça o login ou Registre-se!</p>
      </div>
    );
  }

  function renderPage() {
    return (
      <div className="page">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Aqui você encontra o que está procurando!</h2>
      </div>
    );
  }
  
  return (
    <div className="Home">
      {isAuthenticated ? renderPage() : renderLander()}
    </div>
  );
}
