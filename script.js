<script>

//1. selecionamos todos os checkboxes que tem a classe 'salvar-check'
const checks = document.querySelectorAll('.salvar-check');

//2. para cada um deles, adicinamos um "vigia" (EventListener)
checks.forEach(check =>{
  check.addEventeListener('change",()=>{
    //quando mudar, guardamos o ID do botao e se ele esta true(marcado) ou false(desmarcado)
    localStorage.setItem(check id, check.checked);
  })
})
// este codigo roda assim que a pagina abre
 checks.forEach(check =>{
   //vamos na gaveta (localstorage) ver ser existe algo com ID deste check
   const marcado = localStorage.getItem(check.id;

   //se o que estiver guardado for "true", a gente marca o checkbox
   if (marcado ===´true'){
     check.checked = true;
   }
})               
<script>
