document.addEventListener('DOMContentLoaded', function() {
  // body class list
  var classList = document.body.classList;

  // class name toggler
  function toggle(e, toggleName, removeName) {
    e.preventDefault();
    classList[classList.contains(toggleName) ? 'remove' : 'add'](toggleName);
    classList.remove(removeName);
  }

  // event delegation handler
  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('avn-layout-toggle-nav')) {
      toggle(e, 'avn-layout-nav-open', 'avn-layout-links-open');
    } else if (e.target.classList.contains('avn-layout-toggle-links')) {
      toggle(e, 'avn-layout-links-open', 'avn-layout-nav-open');
    }
  });

  // close navigation when click on link (usefull for anchor).
  document.querySelector('#avn-layout-wrap > aside').addEventListener('click', function(e){
    if (e.target.nodeName.toLowerCase() === 'a') {
      classList.remove('avn-layout-nav-open');
    }
  });
});
