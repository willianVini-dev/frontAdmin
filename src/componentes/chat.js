import React, {useState,useEffect,useRef} from 'react';
import './chat.css';
import useApi from './api.js';
import MsgItem from './msgItem';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import ReplyIcon from '@material-ui/icons/Reply';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: '#98c453',
    color: '#FFF',
    "&:hover":{
      background: '#98c453'

      }

  },
});


export default ({info})=>{
  const api = useApi();
  

  // realizar a chamada da api para listar as mensagens do banco
  const [mensagem, setMensagem]= useState([
    {id:'123456', mensagem:' testando uma nova mensagem aquddddi'},
    {id:'12', mensagem:' testando uma nova mensagem aqui'},
    {id:'12', mensagem:' testando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aquitestando uma nova mensagem aqui'},
    {id:'12', mensagem:' testando uma nova mensagem aqui'},
    {id:'12', mensagem:' testando uma nova mensagem aqui'},
    {id:'12', mensagem:' testando uma nova mensagem aqui'},
    {id:'123456', mensagem:' testando uma nova mensagem aquddddi'}
  ]);

  
 // função para realizar a inserção de mensagem // realizar o envio via Api
  const addMsg = (id,msgInput)=>{ 
    setMensagem([...mensagem,{id:id, mensagem:msgInput}])

    api.setMsg(id,msgInput);

    //limpando o input de mensagem
    setText('');
    console.log(mensagem);
  }



  const chatMsg = useRef();
  // sempre quando tem mensagem nova, a barra de rolagem vai para a final do chat
  useEffect(()=>{
    if(chatMsg.current.scrollHeight > chatMsg.current.offsetHeight){
      chatMsg.current.scrollTop = chatMsg.current.scrollHeight - chatMsg.current.offsetHeight;
    }
  }
  ,[mensagem]);


  const classes = useStyles();
  const [text, setText]= useState('');
  const [mic, setMic] = useState(false);

  // confirurações do mic
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition !== undefined){recognition = new SpeechRecognition();}
  const micClick = ()=>{
    if(recognition !== null){

      recognition.onstart =()=>{setMic(true)};
      recognition.onend   =()=>{setMic(false)};
      recognition.onresult =(e)=>{
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }
  }

  return(

    <div className="chat">
      <div className="chat-body">

        <div className="chat-title">
          <div className="chat-title-name">Nome da Empresa</div>
        </div>
        
        <div ref={chatMsg}className="chat-msg">
            {mensagem.map((item,key)=>(
              <div className="chat-msg-item" style={{justifyContent: item.id == info.id ? 'flex-start': 'flex-end'}}>
                  <MsgItem
                    key={key}
                    data={item}
                    user={info.id}
                  />
              </div>
            ))}
        </div>


        <div className="chat-footer">
          <div className="chat-footer-center">
            <input 
              type="text" 
              className="chat-footer-input"
              placeholder={ mic ? 'Escutando...': "Digite uma mensagem..."}
              value={text}
              onChange={(e)=>(setText(e.target.value))}
              onKeyUp={(e)=>{
                  if(e.keyCode == 13){
                    // adicionando mensagem viabotão ENTER
                    addMsg(info.id,text)
                  }
                }
              }/>
          </div>
          <div className="chat-footer-right">
            {text == '' 
              ? <div className="chat-footer-btn" onClick={micClick}>
                <MicIcon
                  style={{color: mic ? '#98c453': '#919191', fontSize: mic ? '28px': '20px'}}/>
              </div>

              : <div className="chat-footer-btn">
                  <SendIcon onClick={()=>(addMsg(info.id,text))}/>
                </div>
            }


          </div>
        </div>

      </div>
      <div className="chat-info">
        <div className="info-atendimento">
          <p>Informações sobre o atendimento</p>
        </div>
        <div className="info-body">
          <div className="info-body-item">
            <p style={{width:'100px'}}>Motivo:</p> <p>{info.motivo}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Nome:</p> <p>{info.nome}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Data:</p> <p>{info.data}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Classificação:</p> <p>{info.classificacao}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Classificação:</p> <p>{info.classificacao}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Classificação:</p> <p>{info.classificacao}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Classificação:</p> <p>{info.classificacao}</p>
          </div>
          <div className="info-body-item">
            <p style={{width:'100px'}}>Classificação:</p> <p>{info.classificacao}</p>
          </div>

          <div className="info-button">
            <Button 
              variant="contained" 
              endIcon={<CheckIcon/>}
              style={{marginLeft:'10px'}}
              className={classes.root}>

              Finalizar
            </Button>

            <Button 
              variant="contained" 
              endIcon={<ReplyIcon/>}
              style={{marginLeft:'10px'}}
              className={classes.root}>

              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}