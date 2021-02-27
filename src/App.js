import React, {useState} from 'react';
import './App.css';
import ListaChamados from './componentes/listaChamados';
import Chat from './componentes/chat.js'



function App() {

  const [listaChamados, setListaChamados] = useState([
    {id: 123456, motivo: 'Cancelamento', nome:'willian vinicius', data: '12:00', classificacao: 'testando'},
    {id: 12, motivo: 'testando um chamado', nome:'willian vinicius',data: '12:00', classificacao: 'testando'}
  ]);
  const [chatActive, setChatActive] = useState();
  const [user, setUser] = useState();


  
  return (
  
    <div>
     {
       chatActive !== undefined
       ? <div>
          <Chat info={user}/>
         </div>
     
       :<div className="inicio">
          <div className="inicio-intro">
            {listaChamados.map((item,key)=>(

              <ListaChamados
                key={key}
                data={item}
                onClick={(e)=>(setChatActive(item.id),setUser(item))}
              />

            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
