import React from 'react';
import './listaChamados.css';
import BallotIcon from '@material-ui/icons/Ballot';
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Button from '@material-ui/core/Button';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { makeStyles } from '@material-ui/core/styles';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';


const useStyles = makeStyles({
  root: {
    background: '#98c453',
    color: '#FFF',
    "&:hover":{
      background: '#98c453'
      }

  },
});

export default ({data,onClick})=>{
  const classes = useStyles();
  return(
    <div className="container">

      <div className="line">
        <p style={{marginTop:'5px'}}><BallotIcon/></p>
        <p style={{width:'140px'}}>Motivo:</p>
        <p style={{fontWeight:700}}>{data.motivo}</p>
      </div>

      <div className="line">
        <p style={{marginTop:'5px'}}><PersonIcon/></p>
        <p style={{width:'140px'}}>Nome:</p>
        <p style={{fontWeight:700}}>{data.nome}</p>
      </div>

      <div className="line">
        <p style={{marginTop:'5px'}}><ScheduleIcon/></p>
        <p style={{width:'140px'}}>Data/Hora:</p>
        <p style={{fontWeight:700}}>{data.data}</p>
      </div>

      <div className="line">
        <p style={{marginTop:'5px'}}><AssignmentTurnedInIcon/></p>
        <p style={{width:'140px'}}>Classificação:</p>
        <p style={{fontWeight:700}}>{data.classificacao}</p>
      </div>
   
      <div className="line-button">
        <Button 
          variant="contained" 
          color="secondary"
          onClick={onClick}
          className={classes.root}
          endIcon={<RecordVoiceOverIcon/>}>
            
          Atender
        </Button>
      </div>


    </div>
  );
}
