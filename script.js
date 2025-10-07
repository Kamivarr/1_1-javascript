(function() {
  // ==============================
  // Ex1 – Liczby od 0 do 9 po kliknięciu
  // ==============================
  const ex1_button = document.getElementById('ex1_button');
  const ex1_content = document.getElementById('ex1_content');

  if (ex1_button && ex1_content) {
    ex1_button.addEventListener('click', () => {
      const numbers = Array.from({ length: 10 }, (_, i) => i);
      ex1_content.textContent = numbers.join(', ');
    });
  }

  // ==============================
  // Ex2 – Walidacja numeru telefonu
  // ==============================
  const ex2_text = document.getElementById('ex2_text');
  const ex2_content = document.getElementById('ex2_content');

  if (ex2_text && ex2_content) {
    ex2_text.addEventListener('input', () => {
      const value = ex2_text.value;

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
  }

  const ex3_element = document.getElementById('ex3_element');
  const containerOne = document.getElementById('ex3_one');
  const containerTwo = document.getElementById('ex3_two');

  if (ex3_element && containerOne && containerTwo) {
    ex3_element.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', ex3_element.id);
    });

    const allowDrop = (e) => e.preventDefault();

    const handleDrop = (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      const dragged = document.getElementById(id);
      if (dragged) {
        e.currentTarget.appendChild(dragged);
      }
    };

    // Zezwól na przeciąganie **tylko do containerTwo**
    containerTwo.addEventListener('dragover', allowDrop);
    containerTwo.addEventListener('drop', handleDrop);

    // containerOne nie obsługuje drop, więc element nie można wrócić
  }

})();
