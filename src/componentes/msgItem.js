import React from 'react';
import './msgItem.css';

export default ({data,user})=>{

  return(
    <div className="mensagemArea">
      <p>{data.mensagem}</p>
    </div>
  );
}