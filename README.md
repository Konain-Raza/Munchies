# Munchies API 🍪

Are you ready to embark on a flavor-filled adventure? 🌟 Welcome to the Munchies API, where delicious snacks meet seamless coding! This API is your ticket to a snack paradise, perfect for food apps, snack-related projects, or simply satisfying those late-night cravings (we won’t judge)! 🍕🍩

With our API, you can effortlessly access a variety of munchies, from savory snacks to sweet treats, all at your fingertips. Think of it as your personal snack assistant, ready to serve up tasty data faster than you can say “I’m hungry!” 😋✨

So, roll up your sleeves, grab your virtual forks, and let’s dive into the scrumptious world of munchies together. Just remember: coding on an empty stomach is like trying to bake a cake without flour—totally possible but incredibly messy! 🎉


## Table of Contents 📖
- [Overview](#overview)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Postman Collection](#postman-collection)
- [Endpoints](#endpoints)
  - [Get All Munchies](#get-all-munchies)
  - [Get Munchies by Category](#get-munchies-by-category)
  - [Get Munchie Categories](#get-munchie-categories)
  - [Add a Munchie](#add-a-munchie)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview
The Munchies API allows you to access and manage a diverse collection of munchies. With simple HTTP requests, you can retrieve lists of snacks, filter them by category, and even add your own munchies to the database. It's designed to be user-friendly and is perfect for developers looking to add fun and engaging snack data to their applications.

## Features 🌟
- **Get All Munchies**: Retrieve a comprehensive list of all available munchies.
- **Get Munchies by Category**: Filter munchies based on specific categories.
- **Get Munchie Categories**: Access a list of all available munchie categories.
- **Add a Munchie**: Create new munchies with detailed information.

## API Documentation 📚
Explore the full API documentation here: [Munchies API Docs](http://munchiees.netlify.app/)

## Postman Collection 🔗
Get started with our Postman collection for easy testing and integration of the Munchies API:
[Open Postman Collection](https://www.postman.com/security-specialist-55932751/munchies/collection/rlxbo0q/munchies?action=share&creator=37681364)

## Endpoints 🔍

### Get All Munchies
- **Endpoint**: `GET https://munchies-v1.vercel.app/munchies`
- **Description**: Fetch a full list of available munchies.

**Example Code**:
```javascript
fetch('https://munchies-v1.vercel.app/munchies')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching munchies:', error));
```

### Get Munchies by Category
- **Endpoint**: `GET https://munchies-v1.vercel.app/munchies/category/:category`
- **Description**: Fetch munchies that belong to a specific category.

**Parameters**:
- `:category`: Replace with the desired munchie category (e.g., `Snacks`).

**Example Code**:
```javascript
const category = 'Snacks'; // example category
fetch(`https://munchies-v1.vercel.app/munchies/category/${category}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching munchies by category:', error));
```

### Get Munchie Categories
- **Endpoint**: `GET https://munchies-v1.vercel.app/munchies/categories`
- **Description**: Fetch all available munchie categories.

**Example Code**:
```javascript
fetch('https://munchies-v1.vercel.app/munchies/categories')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching munchie categories:', error));
```

### Add a Munchie
- **Endpoint**: `POST https://munchies-v1.vercel.app/addmunchie`
- **Description**: Add a new munchie to the database.

**Request Body**:
```json
{
  "name": "Pizza",
  "category": "Snacks",
  "price": 9.99,
  "description": "Delicious cheesy pizza.",
  "imageUrl": "http://example.com/pizza.jpg"
}
```

**Example Code**:
```javascript
fetch('https://munchies-v1.vercel.app/addmunchie', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "Pizza",
    category: "Snacks",
    price: 9.99,
    description: "Delicious cheesy pizza.",
    imageUrl: "http://example.com/pizza.jpg"
  }),
})
.then(response => response.json())
.then(data => console.log('Munchie added:', data))
.catch(error => console.error('Error adding munchie:', error));
```

## Examples 💻
Here are a few quick examples to demonstrate how to use the Munchies API effectively.

### Fetch All Munchies
```javascript
fetch('https://munchies-v1.vercel.app/munchies')
  .then(response => response.json())
  .then(data => {
    console.log("Munchies List:", data);
  });
```

### Adding a New Munchie
```javascript
fetch('https://munchies-v1.vercel.app/addmunchie', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "Chocolate Chip Cookie",
    category: "Desserts",
    price: 1.99,
    description: "Soft and chewy chocolate chip cookie.",
    imageUrl: "http://example.com/cookie.jpg"
  }),
})
.then(response => response.json())
.then(data => console.log('New munchie added:', data));
```

## Contributing 🤝
We welcome contributions to enhance the Munchies API! If you have ideas for new features or improvements, feel free to fork the repository, make your changes, and submit a pull request. Please ensure your contributions adhere to our coding standards.

## License 📜
This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Contact 📫
Made with ❤️ by **Konain Raza**. For any questions or feedback, reach out via email at [konainraza105@gmail.com](mailto:konainraza105@gmail.com).
