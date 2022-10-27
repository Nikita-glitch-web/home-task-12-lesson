const createBtn = (
  root,
  size = 300,
  border = 1,
  borderColor = "green",
  bgColor = "yellow"   
) => {
  const bthWithSlider = document.createElement("div");

  const body = document.querySelector("body");
  bthWithSlider.style.borderRadius = "80%";
  bthWithSlider.style.width = `${size}px`;
  bthWithSlider.style.height = `${size}px`;
  bthWithSlider.style.border = `${border}px solid ${borderColor}`;
  bthWithSlider.style.background = `${bgColor}`;
  root.append(bthWithSlider);
  bthWithSlider.classList.add('author');
};


const alertBtn = (
  root,
  size = 550,
  border = 1,
  borderColor = "green",
  bgColor = "black"   
) => {
  const switcher = document.createElement("div");

  const body = document.querySelector("body");
  switcher.style.borderRadius = "20%";
  switcher.style.width = `${size}px`;
  switcher.style.height = `${size}px`;
  switcher.style.border = `${border}px solid ${borderColor}`;
  switcher.style.background = `${bgColor}`;
  root.append(bthWithSlider);
  //switcher.classList.add('author');
};




classForAlertBtn = function () {
    if (htmlBtnPart === clicked) {
      switcher.addEventListener('onclick', () => {
        switcher.classList.add('clicked__btn')
      })
  } else {
    switcher.classList.add('hidden__btn')
  }
}


function htmlBtnPart(root, imageData) {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="author"><a href="${imageData.url}" target="blank">${imageData.author}</a></div>
    `;
  root.append(div);
}

createBtn(document.querySelector('body'));
htmlBtnPart(document.querySelector('body'), {author: "Loh", url: 'http://google.com'});