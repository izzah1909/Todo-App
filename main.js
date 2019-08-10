var app = new Vue({
    el: '#app',
    data: {
      todoList: [],
      newTaskName:""
    },
    methods: {
        addTask: function() {
          const newTask = {
              name: this.newTaskName,
              isDone: false
          };
          this.todoList.unshift(newTask);
          this.newTaskName = "";
        },
        deleteTask: function(index) {
           this.todoList.splice(index, 1);
        },
        toggleDone: function(index) {
            this.todoList[index].isDone = !this.todoList[index].isDone;
            
        }
        
    }
  });