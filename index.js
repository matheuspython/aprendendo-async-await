//comparando async await com promise

function rand(min=0, max=3){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min) 
}

function espera(mensagem, tempo){
  return new Promise((resolve, reject)=>{
    if(typeof mensagem !== 'string'){
      reject('erro')
      return
    }

    resolve(mensagem.toUpperCase() + ' passei na promise')
    return
  }, tempo)
}

// espera('Fase 1', rand())
//   .then(valor => {
//     console.log(valor)
//     return espera('fase 2', rand())
//   })
//   .then(fase => {
//     console.log(fase);
//     return espera("fase 3", rand())
//   }).then(fase => {
//     console.log(fase)
//   }).then(fase => {
//     console.log(`terminamos na fase${fase}`)
//   })
//   .catch(err => console.log(err))


async function executa(){
 try{
  const fase1 = await espera('fase 1',rand())
  console.log(fase1)
  
  const fase2 = await espera(2 ,rand())
  console.log(fase2)

  const fase3 = await espera('fase 3',rand())
  console.log(fase3)
 }catch(e){
   console.log(e)
 }

}

executa()