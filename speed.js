(function(){'use strict';
function track(name){try{if(typeof window.plausible==='function'){window.plausible(name)}}catch(e){}}
document.querySelectorAll('[data-event]').forEach(function(el){el.addEventListener('click',function(){track(el.getAttribute('data-event'))})});
document.querySelectorAll('form').forEach(function(form){form.addEventListener('submit',function(){track('consulta_formulario')})});
})();
