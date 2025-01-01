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
    { name: "Black Coat 2", category: "coats", color: [1, 1, 1], file: "matched_items/Black Coat 2.png", link: "https://example.com" },
    { name: "Blue Pants", category: "pants", color: [126, 142, 156], file: "matched_items/Blue Pants.png", link: "https://example.com" },
    { name: "Red Skirt", category: "skirts", color: [147, 5, 33], file: "matched_items/Red Skirt.png", link: "https://example.com" },
    // Add more dataset entries as needed
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
