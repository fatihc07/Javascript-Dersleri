// 2 farklı for kullanımı
for (let i = 0; i < 10; i++) {
    console.log(i);
}

var liste = ["Pazartesi", "Salı", "Çarşamba"]


for (let gun in liste) {

    console.log(liste[gun])

}
// not objesi yaratıp, baslik ve not özelliğini ekleyin
// kullanıcıdan 2 değeri alıp objeye atayın
// alert ile ekrana basın
function gonder() {
    const baslik = document.getElementById('baslik').value;
    const not = document.getElementById('not').value;

    if (baslik.trim() === '' || not.trim() === '') {
        alert('Lütfen başlık ve not alanlarını doldurun.');
        return;
    }

    const notesList = document.getElementById('notes-list');

    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');

    const noteTitle = document.createElement('h3');
    noteTitle.textContent = baslik;

    const noteContent = document.createElement('p');
    noteContent.textContent = not;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Sil';
    deleteButton.onclick = function() {
        notesList.removeChild(noteItem);
    };

    noteItem.appendChild(noteTitle);
    noteItem.appendChild(noteContent);
    noteItem.appendChild(deleteButton);

    notesList.appendChild(noteItem);

    // Input alanlarını temizle
    document.getElementById('baslik').value = '';
    document.getElementById('not').value = '';
}




