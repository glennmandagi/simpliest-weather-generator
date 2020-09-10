let search = document.querySelector('input');
let info= document.querySelector('.info');
let key = '8660611e24eb9bf03a0dcaf9e18f8028';

const req = async url =>{
  const res = await fetch(url);
  return res.ok ? res.json() : Promise.reject({error: 500});
}

const getInfo = async (s)=>{
  let city = s.value;
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  let res = await req(api);
  console.log(res);
  document.querySelector('span').textContent = Math.floor(res.main.temp);
}

document.addEventListener('DOMContentLoaded', () => {
  search.addEventListener('keydown',(e)=>{
    if (e.code == 'Enter') {
      getInfo(search);
      info.style.display = 'flex';
    }
  })
});
