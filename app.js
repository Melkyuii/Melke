document.addEventListener('DOMContentLoaded', () => {
  const imageInput = document.getElementById('imageInput');
  const classifyButton = document.getElementById('classifyButton');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const categorySection = document.getElementById('categories');
  const colorSection = document.getElementById('colors');
  const resultSection = document.getElementById('result');
  const categoryButtons = document.getElementById('categoryButtons');
  const colorButtons = document.getElementById('colorButtons');
  const productList = document.getElementById('productList');

const dataset = [
    { 
    "name": "Black Coat 2", 
    "category": "coats", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Coat 2.png", 
    "link": "https://www.bershka.com/tr/c0p174997388.html?colorId=800"
  },
{
    "name": "Black Coat 3", 
    "category": "coats", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Coat 3.png", 
    "link": ":https://www.bershka.com/tr/soluk-efektli-suni-deri-ceket-c0p162282059.html?colorId=800"},
  { 
    "name": "Black Coat", 
    "category": "coats", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Coat.png", 
    "link":
    "https://www.bershka.com/tr/c0p164324918.html?colorId=800"},
  { 
    "name": "Black Male Boots", 
    "category": "Boots", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Male Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/erkek/ayakkab%C4%B1/cizmeler-ve-botlar/bagc%C4%B1kl%C4%B1-deri-bot_77015981?c=99&utm_source=product-share&utm_medium=social"},
  { 
    "name": "Black Pants 2", 
    "category": "Pants", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Pants 2.png", 
    "link": "https://www.zara.com/tr/tr/suni-deri-genis-paca-pantolon-zw-koleksiyonu-p03581041.html?v1=415395144&utm_campaign=productShare&utm_medium=mobile_sharing_iOS&utm_source=red_social_movil"},
  { 
    "name": "Black Pants 3", 
    "category": "Pants", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Pants 3.png", 
    "link": "https://www.zara.com/tr/tr/slim-fit-rahat-pantolon-p06861441.html?v1=410594756&v2=2432096"},
  { 
    "name": "Black Pants", 
    "category": "Pants", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Pants.png", 
    "link": "https://www.zara.com/share/zw-collection-waxed-mid-waist-straight-leg-jeans-p06840258.html?v1=384844674&v2=2419185&utm_campaign=productShare&utm_medium=mobile_sharing_Android&utm_source=red_social_movil\n"},
  { 
    "name": "Black Skirt 2", 
    "category": "Skirts", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Skirt 2.png", 
    "link": "https://www.defacto.com.tr/velur-maxi-etek-2995361"},
   { 
    "name": "Black Skirt", 
    "category": "Skirts", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Skirt.png", 
    "link": "https://www.defacto.com.tr/pilise-normal-bel-mini-etek-3156159"},
     { 
    "name": "Black Stripes Sweater", 
    "category": "Sweaters", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Stripes Sweater.png", 
    "link": "https://www.koton.com/cizgili-boxy-yarim-fermuarli-triko-kazak-3940835-1/"},
    { 
    "name": "Black Sweater", 
    "category": "Sweaters", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Sweater.png", 
    "link": "\nSiyah Erkek Basic Kazak Bisiklet Yaka 2KAM92005LT | Koton\n"},
  { 
    "name": "Black Woman Boots", 
    "category": "Boots", 
    "color": [1, 1, 1], 
    "file": "matched_items/Black Woman Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/kadin/ayakkab%C4%B1/cizme-ve-bot/ucu-sivri-deri-yar%C4%B1m-bot_77027120?c=99&utm_source=product-share&utm_medium=social"},
  { 
    "name": "Blue Pants 2", 
    "category": "Pants", 
    "color": [110, 142, 136], 
    "file": "matched_items/Blue Pants 2.png", 
    "link": "https://www.zara.com/share/high-waist-trf-wide-leg-jeans-with-crossover-waistband-p08197232.html?v1=416230223&v2=2419185&utm_campaign=productShare&utm_medium=mobile_sharing_Android&utm_source=red_social_movil "},
   { 
    "name": "Blue Pants", 
    "category": "Pants", 
    "color": [126, 142, 156], 
    "file": "matched_items/Blue Pants.png", 
    "link": " https://www.zara.com/share/baggy-fit-jeans-p08062380.html?v1=410773439&v2=2432131&utm_campaign=productShare&utm_medium=mobile_sharing_Android&utm_source=red_social_movil\n"},
   { 
    "name": "Blue Sweater 2", 
    "category": "Sweaters", 
    "color": [68, 84, 107], 
    "file": "matched_items/Blue Sweater 2.png", 
    "link": "\nMavi Erkek Oversize Sweatshirt Kolej Baskılı Yarım Fermuarlı Renk Bloklu Şardonlu Pamuk Karışımlı 5WAM70029MK | Koton\n"},
   { 
    "name": "Blue Sweater", 
    "category": "Sweaters", 
    "color": [22, 35, 54], 
    "file": "matched_items/Blue Sweater.png", 
    "link": "https://www.koton.com/cep-detayli-dugmeli-bisiklet-yaka-tuvit-hirka-4014733-1/"},
  { 
    "name": "Brown Coat 2", 
    "category": "coats", 
    "color": [116, 64, 26], 
    "file": "matched_items/Brown Coat 2.png", 
    "link": "https://www.bershka.com/tr/c0p164324663.html?colorId=700","":
     { 
    "name": "Brown Coat ", 
    "category": "coats", 
    "color": [35, 23, 18], 
    "file": "matched_items/Brown Coat.png", 
    "link": "https://www.bershka.com/tr/c0p164734203.html?colorId=700","":
        { 
    "name": "Brown Line Boots", 
    "category": "Boots", 
    "color": [92, 71, 54], 
    "file": "matched_items/Brown Line Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/kadin/ayakkab%C4%B1/cizme-ve-bot/puskullu-topuklu-deri-bilekte-bot_87030257?c=37&utm_source=product-share&utm_medium=social"}}},
      { 
    "name": "Brown Long Coat ", 
    "category": "coats", 
    "color": [74, 54, 31], 
    "file": "matched_items/Brown Long Coat.png", 
    "link": "https://www.bershka.com/tr/c0p165251114.html?colorId=746","":  
     { 
    "name": "Brown Long Skirt ", 
    "category": "Skirts", 
    "color": [83, 56, 50], 
    "file": "matched_items/Brown Long Skirt.png", 
    "link": "https://www.defacto.com.tr/straight-fit-etek-3175633"}},
  { 
    "name": "Brown Male Boots", 
    "category": "Boots", 
    "color": [50, 34, 31], 
    "file": "matched_items/Brown Male Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/erkek/ayakkab%C4%B1/cizmeler-ve-botlar/cilal%C4%B1-deri-chelsea-bot_7704597\n6?c=30&utm_source=product-share&utm_medium=socia\n"},   
  { 
    "name": "Brown Pants", 
    "category": "Pants", 
    "color": [58, 46, 34], 
    "file": "matched_items/Brown Pants.png", 
    "link": "https://www.zara.com/tr/tr/fitilli-kadife-carrot-fit-pantolon-p01538360.html?v1=379015447&v2=2432096"},
   { 
    "name": "Brown Skirt ", 
    "category": "Skirts", 
    "color": [181, 146, 116], 
    "file": "matched_items/Brown Skirt.png", 
    "link": "https://www.defacto.com.tr/pilise-normal-bel-mini-etek-2993501 "},
    { 
    "name": "Brown Sweater 2", 
    "category": "Sweaters", 
    "color": [163, 129, 104], 
    "file": "matched_items/Brown Sweater 2.png", 
    "link": "https://www.koton.com/sardonlu-pamuklu-basic-kapsonlu-sweatshirt-3939916/"},
     { 
    "name": "Brown Sweater 3", 
    "category": "Sweaters", 
    "color": [183, 161, 129], 
    "file": "matched_items/Brown Sweater 3.png", 
    "link": "https://www.koton.com/bisiklet-yaka-dokulu-triko-kazak-3977974-1/"},
     { 
    "name": "Brown Sweater", 
    "category": "Sweaters", 
    "color": [61, 41, 32], 
    "file": "matched_items/Brown Sweater.png", 
    "link": "https://www.koton.com/koton-x-sahika-ercumen-viskon-kumas-karisimli-uzun-kollu-polo-yaka-tisort-4021668-1/"},
          { 
    "name": "Brown woman Boots", 
    "category": "Boots", 
    "color": [107, 75, 50], 
    "file": "matched_items/Brown woman Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/kadin/ayakkab%C4%B1/cizme-ve-bot/blok-topuklu-suet-bilekte-bot_77056753?c=31&utm_source=product-share&utm_medium=social"},
  { 
    "name": "Camo Coat", 
    "category": "coats", 
    "color": [77, 74, 71], 
    "file": "matched_items/Camo Coat.png", 
    "link": "https://www.bershka.com/tr/desenli-suni-y%C3%BCnl%C3%BC-ceket-c0p167311560.html?colorId=800" },
   { 
    "name": "Dark Blue Sweater", 
    "category": "Sweaters", 
    "color": [21, 30, 49], 
    "file": "matched_items/Dark Blue Sweater.png", 
    "link": "https://www.koton.com/balikci-yaka-dikis-detayli-uzun-kollu-triko-kazak-4023936-1/"},
 { 
    "name": "Dark Red Boots", 
    "category": "Boots", 
    "color": [66, 51, 54], 
    "file": "matched_items/Dark Red Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/kadin/ayakkab%C4%B1/cizme-ve-bot/kare-uclu-deri-yar%C4%B1m-bot_87020250?c=32&utm_source=product-share&utm_medium=social"}, 
  
  { 
    "name": "Dark Red Pants", 
    "category": "Pants", 
    "color": [90, 53, 60], 
    "file": "matched_items/Dark Red Pants.png", 
    "link": "https://www.zara.com/share/cift-pilili-pantolon-p01255556.html?v1=423952432&utm_campaign=productShare&utm_medium=mobile_sharing_iOS&utm_source=red_social_movil"},
  { 
    "name": "Green Pants", 
    "category": "Pants", 
    "color": [68, 68, 54], 
    "file": "matched_items/Green Pants.png", 
    "link": "https://www.zara.com/share/wide-leg-jeans-x-nanushka-p09942301.html?v1=387155978&v2=2432131&utm_campaign=productShare&utm_medium=mobile_sharing_Android&utm_source=red_social_movil"},
   { 
    "name": "Grey Coat", 
    "category": "coats", 
    "color": [160, 158, 159], 
    "file": "matched_items/Grey Coat.png", 
    "link":
    "https://www.bershka.com/tr/c0p164328764.html?colorId=200"},
   { 
    "name": "Grey Long Skirt", 
    "category": "Skirt", 
    "color": [84, 82, 95], 
    "file": "matched_items/Grey Long Skirt.png", 
    "link":
    "https://www.defacto.com.tr/a-kesim-normal-bel-maxi-etek-3194726"},
   { 
    "name": "Grey Skirt 2", 
    "category": "Skirt", 
    "color": [75, 75, 79], 
    "file": "matched_items/Grey Skirt 2.png", 
    "link":
    "https://www.defacto.com.tr/sort-etek-yuksek-bel-pamuk-astarli-mini-etek-3159589"},
   { 
    "name": "Grey Skirt", 
    "category": "Skirt", 
    "color": [90, 89, 94], 
    "file": "matched_items/Grey Skirt.png", 
    "link":
    "https://www.defacto.com.tr/coool-pilise-etek-3172317"},
       { 
    "name": "Grey Sweater", 
    "category": "Sweaters", 
    "color": [146, 152, 152], 
    "file": "matched_items/Grey Sweater.png", 
    "link": "https://www.koton.com/kisa-kollu-triko-kazak-dik-yaka-yumusak-dokulu-3935263-3/"},
   { 
    "name": "High White Boots", 
    "category": "Boots", 
    "color": [194, 175, 161], 
    "file": "matched_items/High White Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/kadin/ayakkab%C4%B1/cizme-ve-bot/fermuarl%C4%B1-uzun-cizme_77067118?c=08&utm_source=product-share&utm_medium=social"},
     { 
    "name": "Pink Skirt", 
    "category": "Skirts", 
    "color": [188, 131, 137], 
    "file": "matched_items/Pink Skirt.png", 
    "link": "https://www.defacto.com.tr/a-kesim-normal-bel-saten-midi-etek-3204297"},
   { 
    "name": "Red Coat", 
    "category": "coats", 
    "color": [44, 6, 17], 
    "file": "matched_items/Red Coat.png", 
    "link":
    "https://www.bershka.com/tr/c0p167582954.html?colorId=605"},
       { 
    "name": "Red Skirt", 
    "category": "Skirts", 
    "color": [147, 5, 33], 
    "file": "matched_items/Red Skirt.png", 
    "link": "https://www.defacto.com.tr/pilise-normal-bel-mini-etek-2993501   "},
  { 
    "name": "Shiny Pants", 
    "category": "Pants", 
    "color": [136, 125, 111], 
    "file": "matched_items/Shiny Pants.png", 
    "link": "https://www.zara.com/share/trf-loose-foil-mid-waist-jeans-p05520212.html?v1=413764386&v2=2419185&utm_campaign=productShare&utm_medium=mobile_sharing_Android&utm_source=red_social_movil"},
   { 
    "name": "Snake Boots", 
    "category": "Boots", 
    "color": [143, 113, 90], 
    "file": "matched_items/Snake Boots.png", 
    "link": "https://shop.mango.com/tr/tr/p/kadin/ayakkab%C4%B1/cizme-ve-bot/yuksek-y%C4%B1lan-desenli-derisi-cizme_77064067?c=08&utm_source=product-share&utm_medium=social"},
  { 
    "name": "White Coat 2", 
    "category": "coats", 
    "color": [227, 227, 227], 
    "file": "matched_items/White Coat 2.png", 
    "link": "https://www.bershka.com/tr/c0p165175307.html?colorId=805" },
  { 
    "name": "White Coat 3", 
    "category": "coats", 
    "color": [236, 226, 222], 
    "file": "matched_items/White Coat 3.png", 
    "link": "https://www.bershka.com/tr/kap%C3%BC%C5%9Fonlu-suni-k%C3%BCrk-ceket-c0p177325745.html?colorId=712" },
{ 
    "name": "White Coat", 
    "category": "coats", 
    "color": [203, 182, 159], 
    "file": "matched_items/White Coat.png", 
    "link": "https://www.bershka.com/tr/c0p164319546.html?colorId=746" },
{ 
    "name": "White Pants 2", 
    "category": "Pants", 
    "color": [186, 176, 164], 
    "file": "matched_items/White Pants 2.png", 
    "link": "https://www.zara.com/tr/tr/fitilli-kadife-carrot-fit-pantolon-p01538360.html?v1=379015448&v2=2432096"},
{ 
    "name": "White Pants 3", 
    "category": "Pants", 
    "color": [220, 211, 196], 
    "file": "matched_items/White Pants 3.png", 
    "link": "https://www.zara.com/share/rustik-high-waist-pantolon-p01478162.html?v1=374921107&utm_campaign=productShare&utm_medium=mobile_sharing_iOS&utm_source=red_social_movil"},
{ 
    "name": "White Pants", 
    "category": "Pants", 
    "color": [202, 193, 172], 
    "file": "matched_items/White Pants.png", 
    "link": "https://www.zara.com/share/regular-fit-jeans-p08062315.html?v1=391619855&v2=2432131&utm_campaign=productShare&utm_medium=mobile_sharing_Android&utm_source=red_social_movil"},
    { 
    "name": "White Sweater", 
    "category": "Sweaters", 
    "color": [232, 230, 215], 
    "file": "matched_items/White Sweater.png", 
    "link": "https://www.koton.com/bisiklet-yaka-uzun-kollu-pamuk-karisimli-islemeli-triko-kazak-4034446/"},
    { 
    "name": "White Sweater 2", 
    "category": "Sweaters", 
    "color": [237, 234, 227], 
    "file": "matched_items/White Sweater 2.png", 
    "link": "Ekru Kadın Dik Yaka Kazak Uzun Kollu Saç Örgü Desenli 5WAK90087HT | Koton"}
  ];
  
  const categories = ["coats", "sweaters", "boots", "pants", "skirts"];
  let selectedCategory = null;
  let selectedColor = null;

  classifyButton.addEventListener('click', () => {
    loadingSpinner.style.display = 'block';

    const file = imageInput.files[0];
    if (!file) {
      alert('Please upload an image first.');
      loadingSpinner.style.display = 'none';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const dominantColor = extractDominantColor(img);
        loadingSpinner.style.display = 'none';

        console.log('Dominant Color:', dominantColor); // Debugging
        showCategories();
        setupColorButtons([dominantColor]);
      };
    };
    reader.readAsDataURL(file);
  });

  function extractDominantColor(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const pixels = imageData.data;

    return calculateDominantColor(pixels);
  }

  function calculateDominantColor(pixels) {
    const colorCounts = {};
    let maxCount = 0;
    let dominantColor = [0, 0, 0];

    for (let i = 0; i < pixels.length; i += 4) {
      const r = Math.round(pixels[i] / 10) * 10; // Reduce precision to group similar shades
      const g = Math.round(pixels[i + 1] / 10) * 10;
      const b = Math.round(pixels[i + 2] / 10) * 10;

      const rgb = `${r},${g},${b}`;
      colorCounts[rgb] = (colorCounts[rgb] || 0) + 1;

      if (colorCounts[rgb] > maxCount) {
        maxCount = colorCounts[rgb];
        dominantColor = [r, g, b];
      }
    }

    return dominantColor;
  }

  function mapColorToBasicName(rgb) {
    const [r, g, b] = rgb;
    if (r > 200 && g > 200 && b > 200) return "White";
    if (r > 200 && g < 100 && b < 100) return "Red";
    if (r < 100 && g > 200 && b < 100) return "Green";
    if (r < 100 && g < 100 && b > 200) return "Blue";
    if (r > 100 && g < 50 && b < 50) return "Brown";
    if (r < 50 && g < 50 && b < 50) return "Black";
    return "Other";
  }

  function showCategories() {
    categoryButtons.innerHTML = '';
    categories.forEach(category => {
      const button = document.createElement('button');
      button.textContent = category;
      button.className = 'category-button';
      button.addEventListener('click', () => {
        selectedCategory = category;
        colorSection.style.display = 'block';
        categorySection.style.display = 'none';
      });
      categoryButtons.appendChild(button);
    });
    categorySection.style.display = 'block';
  }

  function setupColorButtons(colors) {
    colorButtons.innerHTML = '';
    colors.forEach((rgb) => {
      const colorName = mapColorToBasicName(rgb);
      const [r, g, b] = rgb;
      const button = document.createElement('button');
      button.textContent = colorName;
      button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      button.style.border = '2px solid black'; // Add a black outline
      button.className = 'color-button';
      button.addEventListener('click', () => {
        selectedColor = rgb;
        colorSection.style.display = 'none';
        showResults();
      });
      colorButtons.appendChild(button);
    });
  }

  function showResults() {
    productList.innerHTML = '';
    const matches = dataset.filter(item => {
      const colorDiff = Math.abs(item.color[0] - selectedColor[0]) +
                        Math.abs(item.color[1] - selectedColor[1]) +
                        Math.abs(item.color[2] - selectedColor[2]);
      return item.category === selectedCategory && colorDiff < 100;
    });

    if (matches.length === 0) {
      productList.innerHTML = '<li>No matches found. Please try again with a better picture or look through the help section.</li>';
    } else {
      matches.forEach(match => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <img src="${match.file}" alt="${match.name}" class="result-thumbnail">
          <p>${match.name}</p>
          <a href="${match.link}" target="_blank">View Product</a>
        `;
        productList.appendChild(listItem);
      });
    }
    resultSection.style.display = 'block';
  }
});
