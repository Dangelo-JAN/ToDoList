const todoes = JSON.parse(localStorage.getItem('todoes'));

const DeleteChecked = () => {
  for (let i = 0; i < todoes.length; i += 1){
    if (todoes[i].completed === true) {
      todoes.splice(i, 1);
    }
  }

  for (let i = 0; i < todoes.length; i += 1) {
    todoes[i].index = i + 1;
  }

  localStorage.setItem('todoes', JSON.stringify(todoes));
  window.location.reload();
}

const True = (index) => {
  for (let i = 0; i < todoes.length; i += 1){
    if (index === todoes[i].index) {
      todoes[i].completed = true;
      localStorage.setItem('todoes', JSON.stringify(todoes));
    }
  }
};

const False = (index) => {
  for (let i = 0; i < todoes.length; i += 1){
    if (index === todoes[i].index) {
      todoes[i].completed = false;
      localStorage.setItem('todoes', JSON.stringify(todoes));
      }
  }
};

export {DeleteChecked, True, False};