const data = fetch('./data.json')
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    getFeatured(res);
    getAll(res);
  });

const getFeatured = (result) => {
  const main = document.querySelector('.main-contents');
  const data = result.data;

  data.map((res) => {
    if (res.display === 'featured') {
      var div = document.createElement('div');
      div.classList.add('featured');
      div.innerHTML = `
      <p class="batch">Batch Name: ${res.id}</p>
      <p class="sub">${res.sub}, ${res.class}th ${res.board}</p>
      <p class="str">${res.strength} Students</p>
      <p class="batch">${res.days
        .map((day) => `<p>DAY: ${day}</p>`)
        .join('')}</p>
      `;
      main.appendChild(div);
    }
  });
};

const getAll = (result) => {
  const main = document.querySelector('.all-contents');
  const data = result.data;

  data.map((res) => {
    var div = document.createElement('div');
    div.classList.add('all');
    div.innerHTML = `
      <p class="batch">Batch Name: ${res.id}</p>
      <p class="sub">${res.sub}, ${res.class}th ${res.board}</p>
      <p class="str">${res.strength} Students</p>
      `;
    main.appendChild(div);
  });
};
