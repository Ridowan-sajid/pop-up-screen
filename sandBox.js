const button=document.querySelector('.btn');
const para=document.querySelector('.paragraph');
button.addEventListener('click',function(e){

  if(para.className.split(' ')[1]=='deactivate'){
    para.classList.remove('deactivate');
  }
  else{
    para.classList.add('deactivate');
  }
});

const body=document.querySelector('body');

body.addEventListener('click',function(e){
  if(e.target.tagName=='BUTTON'){

  }
  else if(e.target.tagName=='P'){

  }
  else{
    para.classList.add('deactivate');
  }
});

const crss=document.querySelector('.paragraph .closeBtn');
crss.addEventListener('click',function(e){
  para.classList.add('deactivate');
})




