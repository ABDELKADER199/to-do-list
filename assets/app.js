let btn_add = document.querySelector('.btn');
let btn_value = document.querySelector('input[name=list]');
let div_list = document.querySelector('.list');
let button_change = document.querySelectorAll('.list button');




// [i] create a function to add list 

btn_add.addEventListener('click',
  () =>{
      x =  btn_value.value;
      div_list.innerHTML += `<div class = "list_item"> <div class = "item"> <input value = "${x}" readonly> </div></div>`;
      btn_value.value = "";
  }
)


// [i] create a function to clear list 


function delete1() {

  let item = document.querySelectorAll('.list_item .item');

  for(i = 0 ; i < item.length; i++){
    item[i].remove();

  }
  }


  // [i] create a function to edit all input on time .....


  function edit1() {
    
    let item_input = document.querySelectorAll('.list_item .item input');
    for(i = 0 ; i < item_input.length ; i++){

      item_input[i].removeAttribute('readonly');

    }
  }


  function save1(){
    let item_input = document.querySelectorAll('.list_item .item input');
    for(i = 0 ; i < item_input.length ; i++){
      item_input[i].setAttribute('readonly',true);
    }

  }









