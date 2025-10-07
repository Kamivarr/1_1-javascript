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


  }
  const ex2_text = document.getElementById('ex2_text');
  const ex2_content = document.getElementById('ex2_content');

  ex2_text.addEventListener('input', function() {
    const value = ex2_text.value;

    // Kolejność walidacji:
    if (/[a-zA-Z]/.test(value)) {
      ex2_content.textContent = "Numer nie może zawierać liter";
    } else if (/[^0-9]/.test(value)) {
      ex2_content.textContent = "Numer nie może zawierać znaków specjalnych";
    } else if (value.length !== 9) {
      ex2_content.textContent = "Długość numeru musi być równa 9";
    } else {
      ex2_content.textContent = "Numer telefonu jest poprawny";
    }
  });
  const element = document.getElementById('ex3_element');
  const containerOne = document.getElementById('ex3_one');
  const containerTwo = document.getElementById('ex3_two');

  // Rozpoczynamy przeciąganie – zapisujemy ID elementu
  element.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', element.id);
  });

  // Pozwalamy na przeciągnięcie
  function allowDrop(e) {
    e.preventDefault();
  }

  // Obsługa upuszczenia elementu do kontenera
  function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    e.currentTarget.appendChild(draggedElement);
  }

  // Dodajemy zdarzenia do obu kontenerów
  [containerOne, containerTwo].forEach(container => {
    container.addEventListener('dragover', allowDrop);
    container.addEventListener('drop', handleDrop);
  });
})();
