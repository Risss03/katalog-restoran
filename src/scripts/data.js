const restaurantList = document.getElementById('main');

fetch('/src/public/data/DATA.json')
  .then(response => response.json())
  .then(data => {

    data.restaurants.forEach(restaurant => {

      const restaurantElement = document.createElement('div');
      restaurantElement.classList.add('restaurant');

      const imgElement = document.createElement('img');
      imgElement.src = restaurant.pictureId;
      imgElement.alt = restaurant.name;
      restaurantElement.appendChild(imgElement);

      const nameElement = document.createElement('h2');
      nameElement.textContent = restaurant.name;
      restaurantElement.appendChild(nameElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = restaurant.description;
      restaurantElement.appendChild(descriptionElement);

      const cityElement = document.createElement('p');
      cityElement.textContent = `City: ${restaurant.city}`;
      restaurantElement.appendChild(cityElement);

      const ratingElement = document.createElement('p');
      ratingElement.textContent = `Rating: ${restaurant.rating}`;
      restaurantElement.appendChild(ratingElement);

      restaurantList.appendChild(restaurantElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
