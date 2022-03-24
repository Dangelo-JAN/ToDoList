export default class ToDoList {
    toDoContainer = document.getElementById('todo-container');
  
    createEmpty = () => {
      const todoes = [];
      localStorage.setItem('todoes', JSON.stringify(todoes));
      console.log('estoy en el createEmpty');
      console.log(todoes.value);
    };
  
    add = (e) => {
      const description = document.getElementById('todo-input').value;
      const todoes = [];
      console.log('estoy en todoes del add ' + todoes + ' del add');
      const todo = {
        description,
        completed: false,
        index: todoes.length,
      };
  
      if (localStorage.getItem('todoes') === undefined) {
        todoes.push(todo);
        localStorage.setItem('todoes', JSON.stringify(todoes));
        console.log('estoy en el if del add');
      } else {
        const todoes = JSON.parse(localStorage.getItem('todoes'));
        console.log('estoy en todoes ' + todoes + ' else');
        todo.index = todoes.length + 1;
        todoes.push(todo);
        localStorage.setItem('todoes', JSON.stringify(todoes));
        console.log('estoy en el else del add');
      }
      document.getElementById('todo-input').reset();
      e.preventDefault();
      window.location.reload();
      console.log('estoy despues del location.reload');
    };
  
    remove = (index) => {
      const todoes = JSON.parse(localStorage.getItem('todoes'));
      for (let i = 0; i < todoes.length; i += 1) {
        if (index === todoes[i].index) {
          todoes.splice(i, 1);
        }
      }
  
      localStorage.setItem('todoes', JSON.stringify(todoes));
      window.location.reload();
    };
  
    loadScreen = () => {
      const todoes = JSON.parse(localStorage.getItem('todoes'));
      console.log('estoy en el ' + todoes + ' del loadScreen1');
      if (!todoes) {
        this.createEmpty();
        console.log('estoy en el this.empty');
        console.log('estoy en el ' + todoes + ' del loadScreen');
      }
      todoes.forEach((todo) => {
        console.log('estoy en el foreach');
        const taskRow = document.createElement('div');
        const checkBox = document.createElement('input');
        const labelTask = document.createElement('label');
        const deleteButtom = document.createElement('img');
    
        toDoContainer.appendChild(taskRow);
        taskRow.append(checkBox, labelTask, deleteButtom);
        labelTask.textContent = todo.description;
        deleteButtom.src = DotsIcon;
    
        taskRow.classList.add('row');
        labelTask.classList.add('label-task');
        checkBox.setAttribute('type', 'checkbox');
        
        deleteButtom.addEventListener('click', () => {
          this.remove(todo.index);
        });
        console.log('estoy en el foreachv2');
      });





      /*
      for (let i = 0; i < books.length; i += 1) {
        const { id } = books[i];
        const { name } = books[i];
        const { author } = books[i];
        const div = document.createElement('div');
        div.classList.add('book-list');
        const bookName = document.createElement('p');
        bookName.classList.add('book-name');
        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        const divBtn = document.createElement('div');
        divBtn.classList.add('btn-container');
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
          this.remove(id);
        });
        divBtn.append(removeBtn);
        bookName.textContent = `"${name}" by`;
        bookAuthor.textContent = author;
        div.append(bookName, bookAuthor, divBtn);
        this.bookSection.append(div);
      }
      */
    }
  }