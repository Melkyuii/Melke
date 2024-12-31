document.addEventListener('DOMContentLoaded', () => {
  const imageInput = document.getElementById('imageInput');
  const classifyButton = document.getElementById('classifyButton');
  const categorySection = document.getElementById('categories');
  const colorSection = document.getElementById('colors');
  const resultSection = document.getElementById('result');
  const categoryButtons = document.getElementById('categoryButtons');
  const colorButtons = document.getElementById('colorButtons');
  const productList = document.getElementById('productList');

  const dataset = [
    { name: "Black Coat 2", category: "coats", color: [1, 1, 1], file: "matched_items/Black Coat 2.png", link: "https://www.bershka.com/tr/c0p174997388.html?colorId=800" },
    // Add more dataset entries here
  ];

  const categories = ["coats", "sweaters", "boots", "pants", "skirts"];

  let selectedCategory = null;
  let selectedColor = null;

  classifyButton.addEventListener('click', () => {
    const file = imageInput.files[0];
    if (!file) {
      alert('Please upload an image first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        Vibrant.from(img).getPalette().then((palette) => {
          const colors = Object.values(palette).map(swatch => swatch.getRgb()).slice(0, 3);
          showCategories();
          setupColorButtons(colors);
        });
      };
    };
    reader.readAsDataURL(file);
  });

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
    const basicColors = ["Red", "Green", "Blue", "Brown", "Black"];
    colors.forEach((rgb, index) => {
      const [r, g, b] = rgb;
      const colorName = basicColors[index] || `Color ${index + 1}`;
      const button = document.createElement('button');
      button.textContent = colorName;
      button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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
      return item.category === selectedCategory && colorDiff < 100; // Adjust threshold as needed
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
