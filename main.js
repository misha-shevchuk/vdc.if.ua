const changeSideNavValue = (value) =>
    (document.querySelector('.side-bar').style.right = value)

  document
    .querySelector('.burger')
    .addEventListener('click', () => changeSideNavValue('0%'))

  document
    .querySelector('.close-bar img')
    .addEventListener('click', () => changeSideNavValue('-100%'))