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
    // Example dataset entries go here
  ];

  const categories = ["coats", "sweaters", "boots", "pants", "skirts"];

  let selectedCategory = null;
  let selectedColor = null;

  const loadingSpinner = document.getElementById('loadingSpinner');

  classifyButton.addEventListener('click', () => {
    loadingSpinner.style.display = 'block'; // Show spinner

    const file = imageInput.files[0];
    if (!file) {
      alert('Please upload an image first.');
      loadingSpinner.style.display = 'none'; // Hide spinner
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        Vibrant.from(img).getPalette()
          .then((palette) => {
            loadingSpinner.style.display = 'none'; // Hide spinner
            const colors = Object.values(palette).map(swatch => swatch.rgb).slice(0, 3);
            showCategories();
            setupColorButtons(colors);
          })
          .catch((err) => {
            console.error('Error extracting colors:', err);
            alert('Failed to process the image. Please try again.');
            loadingSpinner.style.display = 'none'; // Hide spinner
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
