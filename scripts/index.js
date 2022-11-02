
const body = document.querySelector('body');

const tooltip = (
  root,
  size = 120,
  border = 10, 
  borderColor = "green",
  bgColor = "black",
  position = 'relative',
  marginLeft = 'auto',
  marginRight = 'auto'  
) => {
  const container = document.createElement('div')

  const createBtn = () => {
    const switcher = document.createElement("div");
    switcher.style.borderRadius = "50%";
    switcher.style.width = `${size}px`;
    switcher.style.height = `${size}px`;
    switcher.style.border = `${border}px solid ${borderColor}`;
    switcher.style.background = `${bgColor}`;
    switcher.style.position = `${position}`;
    switcher.style.marginLeft = `${marginLeft}`,
    switcher.style.marginRight = `${marginRight}`


    switcher.addEventListener('click', () => {
      // условие если у  елемента есть класс clicked__btn то удалить если нет класса то добавить
      //this.classList.contains('active')
      container.classList.toggle('clicked__btn')
    })
    container.append(switcher)
    
  }

  const createText = () => {
    // climbingElement.classList.add('clicked')
    // SWITHCER НЕ HTML ЄЛЕМЕНТ НУЖНО ДРУГОЙ
    const climbingElement = document.createElement('div');
    climbingElement.innerHTML = `
      Loh Nikita
    `;
    climbingElement.classList.add('climbing-element')
    container.append(climbingElement)
  }

  root.append(container)

  createBtn();
  createText();


};


tooltip(body);


