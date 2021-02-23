import React, {useState} from 'react';
import './App.css';
import ListaChamados from './componentes/listaChamados';
import Chat from './componentes/chat.js'



function App() {

  const [listaChamados, setListaChamados] = useState([
    {id: 123456, motivo: 'testando um chamado', nome:'willian vinicius', data: '12:00', classificacao: 'testando'},
    {id: 1236, motivo: 'testando um chamado', nome:'willian vinicius',data: '12:00', classificacao: 'testando'},
    {id: 12344564456, motivo: 'testando um chamado', nome:'willian vinicius',data: '12:00', classificacao: 'testando'}
  ]);
  const [chatActive, setChatActive] = useState();
  const [user, setUser] = useState();


  
  return (
  
    <div>
     {
       chatActive !== undefined
       ? <div>
          <Chat/>
        </div>
     

       :<div className="inicio">
          <div className="inicio-intro">
            {listaChamados.map((item,key)=>(

              <ListaChamados
                key={key}
                data={item}
                onClick={(e)=>(setChatActive(item.id))}
                
              />

            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
