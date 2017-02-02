(function(){
  var searchBox = document.querySelector('#avn-search');
  var input = searchBox.querySelector('header input');

  // active search box and focus when mouse enter or when click on search box.
  searchBox.addEventListener('mouseenter', openBox);
  searchBox.addEventListener('click', openBox);

  // close search box when mouse leave on search box or when blur on input.
  searchBox.addEventListener('mouseleave', closeBox);
  input.addEventListener('blur', closeBox);

  function openBox(){
    searchBox.classList.add('active');
    // the `focus` works on Desktop when mouse enter and on Mobile when `click`.
    // the `focus` fails on Mobile when mouse enter, but a `blur` event is triggered!
    input.focus();
  }

  function closeBox(){
    input.value || searchBox.classList.remove('active');
  }
})();
