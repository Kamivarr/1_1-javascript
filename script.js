(function() {
  // Pobieramy przycisk i element, w którym wyświetlimy liczby
  var ex1_button = document.getElementById('ex1_button');
  var ex1_content = document.getElementById('ex1_content');

  // Przypisujemy funkcję do zdarzenia onclick
  ex1_button.onclick = function() {
    var tabela = [];

    // Generujemy liczby od 0 do 9
    for (var i = 0; i <= 9; i++) {
      tabela.push(i);
    }

    // Wyświetlamy liczby jako ciąg znaków oddzielony przecinkami
    ex1_content.innerHTML = tabela.toString();
  };
})();
