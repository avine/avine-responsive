(function() {
  // body class list
  var classList = document.body.classList;

  // class name toggler
  function toggle(e, toggleName, removeName){
    e.preventDefault();
    classList[classList.contains(toggleName) ? 'remove' : 'add'](toggleName);
    classList.remove(removeName);
  }

  // event delegation handler
  document.body.addEventListener('click', function(e){
    if (e.target.classList.contains('avn-toggle-nav')) {
      toggle(e, 'avn-nav-open', 'avn-links-open');
    }else if(e.target.classList.contains('avn-toggle-links')) {
      toggle(e, 'avn-links-open', 'avn-nav-open');
    }
  });

  // close navigation when click on link (usefull for anchor).
  document.querySelector('#avn-layout > nav').addEventListener('click', function(e){
    if (e.target.nodeName.toLowerCase() === 'a') {
      classList.remove('avn-nav-open');
    }
  });
})();
