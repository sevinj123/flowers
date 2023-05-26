function chooseFlowers(btn) {
    const selected = btn.innerText;
const images = document.querySelectorAll('img[flowertype]');
    for (let i = 0; i < images.length; i++) {
      const flowerType = flowerImages[i].getAttribute('flowertype');
      if (selected === 'All' || selected === flowerType) {
        images[i].style.display = 'block';
      } else {
        images[i].style.display = 'none';
      }
    }
  }


  //salam muellim,bu taski addEvent listener ile yazdim alinmadi mende elnareden kemke istedim o deyen kimi yazdim.
  //oz yazdigimi komment sekiilinde de gonderecem



// const btn=document.querySelector('.item-list .flowers button');
// const flowerss= document.querySelectorAll('img[flowertype]');
// item-list.forEach (click => {
//     click.addEventListener('click', () => {
//         const cart = click.getAttribute('cart-item');
//         img.forEach( pic=> {
//             if (pic.getAttribute('flowertype').includes(Cactuses)) {
//                 pic.style.display = '';
//             } else {
//                 pic.style.display = 'none';
//             }
//         })
//     })
// })

//amma hec biri alinmiiiiiiiir:(((