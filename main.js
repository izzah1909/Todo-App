var app = new Vue({
    el: '#app',
    data: {
      todoList: [],
      newTaskName:""
    },
    created: function() {
      if(localStorage.getItem("todoList")) {
        this.todoList = JSON.parse(localStorage.getItem("todoList"));
      }
    },
    methods: {
        addTask: function() {
          const newTask = {
              name: this.newTaskName,
              isDone: false
          };
          this.todoList.unshift(newTask);
          this.newTaskName = "";
          this.persistData();
        },
        deleteTask: function(index) {
           this.todoList.splice(index, 1);
           this.persistData();
        },
        toggleDone: function(index) {
            this.todoList[index].isDone = !this.todoList[index].isDone;
            this.persistData();
        },
        persistData:function(){
          localStorage.setItem("todoList", JSON.stringify(this.todoList));
        }
        
    }
  });