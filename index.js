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
      <p class="notify">${res.notify}</p>
      <p class="batch">Batch Name ${res.id}</p>
      <p class="sub">${res.sub}, ${res.class}th ${res.board}</p>
      <p class="str">${res.strength} Students</p>
      <p class="date">Upcoming Class</p>
      <p class="date">Thu, 25th May, <span class="time">12:00 PM</span></p>
      <div class="day">
      ${res.days.map((day) => `<p>${day}</p>`).join('')}
      </div>
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
    <p class="notify">${res.notify}</p>
      <p class="batch">Batch Name ${res.id}</p>
      <p class="sub">${res.name}</p>
      <p class="str">${res.strength} Students</p>
      <p class="date">Upcoming Class</p>
      <p class="date">Thu, 25th May, <span class="time">12:00 PM</span></p>
      <div class="day">
      ${res.days.map((day) => `<p>${day}</p>`).join('')}
      </div>
      `;
    main.appendChild(div);
  });
};

const btnTop = document.querySelector('.top');
const main = document.querySelector('.main-contents');
btnTop.addEventListener('click', () => {
  main.classList.toggle('less');
  if (btnTop.innerHTML === 'Show Less') btnTop.innerHTML = 'Show More';
  else btnTop.innerHTML = 'Show Less';
});

const btnBtm = document.querySelector('.btm');
const all = document.querySelector('.all-contents');
btnBtm.addEventListener('click', () => {
  all.classList.toggle('less');
  if (btnBtm.innerHTML === 'Show Less') btnBtm.innerHTML = 'Show More';
  else btnBtm.innerHTML = 'Show Less';
});
