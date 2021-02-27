import React from 'react';
import './msgItem.css';

export default ({data,user})=>{

  return(
    <div className="mensagemArea">
      {data.mensagem}
    </div>
  );
}