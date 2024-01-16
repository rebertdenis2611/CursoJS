//callback

function primeira(a){
  setTimeout(() => {
    console.log('Sou a conexão do banco!')
    if(a) a()
  }, 10000);
}

function segunda(a){
  setTimeout(() => {
    console.log('Sou a exibição do resultado!')
    if(a) a()
  }, 500);
}

primeira(function(){
  segunda();
});
