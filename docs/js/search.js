document.addEventListener('DOMContentLoaded', function() {
  var search = document.querySelector('#avn-layout-search');
  var input = search.querySelector('header input');
  var result = search.querySelector('article ul');
  var opened = false;
  var value = '';
  var timeout;

  // active search box and focus when mouse enter or when click on search box.
  search.addEventListener('mouseenter', openSearch);
  search.addEventListener('click', openSearch);

  // close search box when mouse leave on search box or when blur on input.
  search.addEventListener('mouseleave', closeSearch);
  input.addEventListener('blur', closeSearch);

  function openSearch() {
    if (opened) return;
    opened = true;

    search.classList.add('active');
    //search.dispatchEvent(new CustomEvent('avnLayoutSearch', { detail: 'open' }));

    // the `focus` works on Desktop when mouse enter and on Mobile when `click`.
    // the `focus` fails on Mobile when mouse enter, but a `blur` event is triggered!
    input.focus();
  }

  function closeSearch() {
    if (input.value) return;
    opened = false;

    search.classList.remove('active');
    //search.dispatchEvent(new CustomEvent('avnLayoutSearch', { detail: 'close' }));

    closeResult();
  }

  function openResult() {
    search.classList.add('avn-layout-search-open');
  }

  function closeResult() {
    search.classList.remove('avn-layout-search-open');
  }

  input.addEventListener('keyup', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (input.value != value && input.value.length >= 3) {
        value = input.value;
        search.dispatchEvent(new CustomEvent('avnLayoutSearch', { detail: value }));
      }
    }, 300);
  });

  search.addEventListener('avnLayoutSearch', function (e) {
    openResult();

    result.innerHTML = 
      '<li><a href="#">123 <i class="avn-layout-search-detail">blabla</i></a></li><li class="avn-layout-search-separator">123</li><li>123</li>';
  });

});
