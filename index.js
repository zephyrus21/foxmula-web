const daysSet = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

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
      const div = document.createElement('div');
      div.classList.add('featured');
      div.innerHTML = `
      <p class="notify">${res.notify}</p>
      <p class="batch">Batch Name ${res.id}</p>
      <div class="sub"><i class="fas i-main fa-clone"></i><p style="flex:1;"> ${
        res.sub
      }, ${res.class}th ${
        res.board
      } </p><i class="fas i-main fa-pen-square"></i></div>
      <div class="str"><i class="fas i-main fa-user-circle"></i>
      <p style="flex:1;">${
        res.strength
      } Students</p><i class="fas i-main fa-user-plus"></i></div>
      <p class="date">Upcoming Class</p>
      <p class="date">Thu, 25th May, <span class="time">12:00 PM</span></p>
      <div class="day">
      ${res.days.map((day) => `<p class="day-p">${day}</p>`).join('')}
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
    const div = document.createElement('div');
    div.classList.add('all');
    div.innerHTML = `
    <p class="notify">${res.notify}</p>
      <p class="batch">Batch Name ${res.id}</p>
      <div class="sub"><i class="fas i-main fa-user"></i><p style="flex:1;"> ${
        res.name
      } </p><i class="fas i-main fa-pen-square"></i></div>

      <div class="str"><i class="fas i-main fa-user-circle"></i>
      <p style="flex:1;">${
        res.strength
      } Students</p><i class="fas i-main fa-user-plus"></i></div>
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
