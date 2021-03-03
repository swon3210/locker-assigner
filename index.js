const button = document.querySelector('#button');
button.addEventListener('click', () => {
  const crews = [
    '곤이',
    '하루',
    '동동',
    '티케',
    '엘라',
    '썬',
    '서니',
    '도비',
    '다윗',
    '심바',
    '그루밍',
    '주모',
    '카일',
    '브랜',
    '신세한탄',
    '인치',
    '체프',
    '지그',
    '브콜',
    '피터',
    '파노',
    '콜린',
    '디토',
    '유조',
  ];

  const locker = [];

  while (locker.length < crews.length) {
    const index = Math.round(Math.random() * (crews.length - 1));
    const crew = crews[index];
    console.log(index, crews.length);
    if (!locker.includes(crew)) {
      locker.push(crew);
    }
  }

  locker.splice(16, 0, '미키');
  locker.splice(16, 0, '크리스');

  const crewList = document.querySelector('#crews');

  crewList.innerHTML = locker
    .map((crew, idx) => {
      return `<li style="list-style: none">${idx + 1}. ${crew}</li>`;
    })
    .join('');
});
