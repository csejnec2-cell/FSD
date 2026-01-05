 async function getRandomJoke(){
 const res = await fetch('https://official-joke-api.appspot.com/jokes/random')
 const json_result=await res.json();
 console.log(json_result)
 let getSetup=document.getElementById('getSetup');
 let getPunchline=document.getElementById('PunchlineSetup');
  getSetup.innerHTML=json_result.setup;
  getPunchline.innerHTML=json_result.punchline;
 }
 getRandomJoke();