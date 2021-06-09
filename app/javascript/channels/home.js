export const btnFunction = () => {
  const array = ['Ox', 'Macunaíma', 'Boi e Brasa', 'Sal e brasa', 'AnnieCakes', 'Comer em casa', 'Kayo escolhe', 'Andressa escolhe'];
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', (e)=>{
    console.log(array);
  });
}