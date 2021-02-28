import React, {useState} from 'react';
import './App.css';
import ListaChamados from './componentes/listaChamados';
import Chat from './componentes/chat.js'
import useApi from './componentes/api';



function App() {
  const api = useApi();

  // chamados fake, para realizar teste
  const [listaChamados, setListaChamados] = useState([
    {id: 123456, idUsuario: 1234567, motivo: 'Cancelamento', nome:'willian vinicius', data: '12:00', classificacao: 'testando'},
    {id: 12, idUsuario: 123, motivo: 'testando um chamado', nome:'willian vinicius',data: '12:00', classificacao: 'testando'}
  ]);




  // verificando se tem novos chamados a cada 5 segundos
  setInterval(()=>{
    const listaChamado = async()=>{
      const json = await api.listaChamados('chat/listaChamado')
      console.log(json);
    }
    //listaChamado();
  }, 5000);



  // setando qual chamado está ativo
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
