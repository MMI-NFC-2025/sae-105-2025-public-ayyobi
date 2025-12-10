// Recherche interne / focus sur formulaire (placeholder)
export function attachSearch(inputSelector){
  const input=document.querySelector(inputSelector);
  if(!input) return;
  input.addEventListener('keyup',()=>{/* recherche basique */});
}