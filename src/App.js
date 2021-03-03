import React, {useState} from 'react';
import './App.css';
import ListaChamados from './componentes/listaChamados';
import Chat from './componentes/chat.js'
import useApi from './componentes/api';
import imgLogin from './img/loading.gif'



function App() {
  const api = useApi();

  // chamados fake, para realizar teste
  const [listaChamados, setListaChamados] = useState([]);




  // verificando se tem novos chamados a cada 5 segundos
  setInterval(()=>{
    const listaChamado = async()=>{
      const json = await api.listaChamados('chat/listaChamado')
      setListaChamados(json);
      console.log(json)
    }
    listaChamado();
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
            {listaChamados == '' && 
              <div>
                <center>
                  <p>Carregando chamados...</p> 
                  <img style={{width:'60px', height:'60px'}}src={imgLogin}/>
                </center>
              </div>
            }
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
