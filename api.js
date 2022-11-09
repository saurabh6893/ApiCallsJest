export const apidata = () => {
  fetch('https://pokeapi.co/api/v2/pokemon').then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('I have no idea what');
    }
  });
};
