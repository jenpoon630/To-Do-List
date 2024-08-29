let to_do_array = [];



      display();

      function add() {
        let input_to_do = document.querySelector(".js-input");
        let date_input = document.querySelector(".js-due-date-input");
        to_do_array.push({
          name: input_to_do.value,
          due_date: date_input.value
        });
        input_to_do.value = "";
        display();
      }

      function display() {
        let to_do_list_html = "";

        to_do_array.forEach(function(output, index) {
          let name = output.name;
          let due_date = output.due_date;
          let html = `<div>${name}</div>
          <div>${due_date}</div>
          <button class="delete-to-do-button" onclick="to_do_array.splice(${index},1); display();">Delete</button>`;
          to_do_list_html += html;
        })
        document.querySelector(".js-output-container").innerHTML =
          to_do_list_html;
        };


        

      // function display() {
      //   let to_do_list_html = "";

      //   to_do_array.forEach(function(output, index) {
          
      //   });


      //   for (let i = 0; i < to_do_array.length; i++) {
      //     let output = to_do_array[i];
      //     let name = output.name;
      //     let due_date = output.due_date;
      //     let html = `<div>${name}</div>
      //     <div>${due_date}</div>
      //     <button class="delete-to-do-button" onclick="to_do_array.splice(${i},1); display();">Delete</button>`;
      //     to_do_list_html += html;
      //   }
      //   document.querySelector(".js-output-container").innerHTML =
      //     to_do_list_html;
      // }