function getByClass(className) {
  return document.getElementsByClassName(className);
}

function getById(className) {
  return document.getElementById(className);
}

const calculate = () => {
  let owx1 = parseInt(getById('ow_x1').value);
  let owz1 = parseInt(getById('ow_z1').value);
  let owx2 = parseInt(getById('ow_x2').value);
  let owz2 = parseInt(getById('ow_z2').value);

  if ([owx1, owz1, owx2, owz2].some(n => isNaN(n))) {
    alert('Please enter coordinates!');
    return;
  }

  const nx1 = Math.floor((owx1 + (owx1 >= owx2 ? -128 : 128)) / 8);
  const nz1 = Math.floor((owz1 + (owz1 >= owz2 ? -128 : 128)) / 8);
  const nx2 = Math.floor((owx2 + (owx1 >= owx2 ? -128 : 128)) / 8);
  const nz2 = Math.floor((owz2 + (owz1 >= owz2 ? -128 : 128)) / 8);

  getById('n_x1').value = nx1;
  getById('n_z1').value = nz1;
  getById('n_x2').value = nx2;
  getById('n_z2').value = nz2;
};

getById('ow1').onclick = calculate;

document.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    calculate();
  }
});
