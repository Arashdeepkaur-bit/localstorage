
document.getElementById('createForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = document.getElementById('data').value;

    let storedData = JSON.parse(localStorage.getItem('data')) || [];
    storedData.push(data);
    localStorage.setItem('data', JSON.stringify(storedData));

    alert('Data created successfully!');
});
document.getElementById('updateForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const oldData = document.getElementById('oldData').value;
    const newData = document.getElementById('newData').value;

    let storedData = JSON.parse(localStorage.getItem('data')) || [];
    const index = storedData.indexOf(oldData);
    if (index !== -1) {
        storedData[index] = newData;
        localStorage.setItem('data', JSON.stringify(storedData));
        alert('Data updated successfully!');
    } else {
        alert('Data not found!');
    }
});

document.getElementById('deleteForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const deleteData = document.getElementById('deleteData').value;

    let storedData = JSON.parse(localStorage.getItem('data')) || [];
    const index = storedData.indexOf(deleteData);
    if (index !== -1) {
        storedData.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(storedData));
        alert('Data deleted successfully!');
    } else {
        alert('Data not found!');
    }
});
