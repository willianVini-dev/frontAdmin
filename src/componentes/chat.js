import React, {useState} from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
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

export default ()=>{
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
          <div className="chat-title-button">

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

        <div className="chat-msg">
          <div className="chat-msg-line">
            testando uma mensagem
          </div>
        </div>


        <div className="chat-footer">
          <div className="chat-footer-center">
            <input 
              type="text" 
              className="chat-footer-input"
              placeholder={ mic ? 'Escutando...': "Digite uma mensagem..."}
              value={text}
              onChange={(e)=>(setText(e.target.value))}/>
          </div>
          <div className="chat-footer-right">
            {text == '' 
              ? <div className="chat-footer-btn" onClick={micClick}>
                <MicIcon
                  style={{color: mic ? '#98c453': '#919191', fontSize: mic ? '28px': '20px'}}/>
              </div>

              : <div className="chat-footer-btn">
                  <SendIcon/>
                </div>
            }


          </div>
        </div>

      </div>
      <div className="chat-info">

      </div>
    </div>
  );
}