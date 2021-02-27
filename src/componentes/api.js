 // função para realizar o post pata qualquer rota
 const apiPost = async (endpoint,body)=>{
  const res = await fetch(endpoint,{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();
  return json;
 }
 
 const api = {

  // func para realizar a inserção da mensagem no banco de dados 
  setMsg:async (id,mensagem)=>{
    //const json = apiPost('endpoint',{id,mensagem});
    //return json;
    console.log(id);
    console.log(mensagem);
  },

  teste: async()=>{
    console.log('testando a api');
  }
 };

 export default ()=> api;