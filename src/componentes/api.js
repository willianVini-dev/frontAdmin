
const BASE_URL = 'https://clinipamweb.clinipam.com.br/reseat/'

// função para realizar o post para qualquer rota
 const apiPost = async (endpoint,body)=>{
  const res = await fetch(endpoint,{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://clinipamweb.clinipam.com.br',
      'Access-Control-Allow-Methods':'POST, GET',
      'Access-Control-Allow-Headers':'*'
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();
  return json;
 }
 
 const api = {

  // func para realizar a inserção da mensagem no banco de dados 
  setMsg:async (id,idUsuario,mensagem)=>{
    const json = apiPost(BASE_URL+'chat/inserirMsg',{id,idUsuario,mensagem});
    return json;
  },
  // func para listar os chamados
  listaChamados: async(endpoint)=>{
    const json = apiPost(BASE_URL+endpoint);
    return json;
  },
  // func para listar as mensagens
  listaMensagens: async(endpoint)=>{
    const json = apiPost(BASE_URL+endpoint);
    return json;
  }
 };

 export default ()=> api;