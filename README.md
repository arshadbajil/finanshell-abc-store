# Simple Shopping Cart App

![Simple Shopping Cart App](https://cdn.dribbble.com/userupload/13213221/file/original-bd3a0b0a001c087afb37ceb901794946.png?resize=400x0)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Monorepo Architecture](#monorepo-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [Pages](#pages)
  - [Products by Category](#products-by-category)
  - [Single Product Details](#single-product-details)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Simple Shopping Cart App is a modern e-commerce platform built with Next.js and React, designed to provide users with a seamless shopping experience. It allows users to browse products, add them to their cart, and proceed to checkout with multiple payment options.

## Features

- Browse products by categories
- View product details including title, price, and description
- Add/remove items from the shopping cart
- Apply discounts, calculate subtotal, and display order summary
- Choose from various payment methods during checkout
- Responsive design for desktop, tablet, and mobile devices

## Technologies Used

- Next.js
- React
- Redux (for state management)
- Tailwind CSS (for styling)
- Axios (for HTTP requests)
- FakeStoreAPI (for mock product data)

## Monorepo Architecture

The Simple Shopping Cart App follows a monorepo architecture, which allows for managing both the web and mobile apps from the same codebase. The repository structure includes:

- `packages/web/`: Next.js web app
- `packages/mobile/`: Corresponding mobile app (not implemented in this sample)

## Installation

1. Clone the repository:

```
git clone https://github.com/arshadbajil/finanshell-abc-store.git
```

2. Navigate to the project directory:

```
cd finanshell-abc-store
```

3. Install dependencies for the web app:

```
cd packages/web
npm install
```

## Usage

1. Start the development server for the web app:

```
npm run dev
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

## API Integration

The Simple Shopping Cart App integrates with the FakeStoreAPI to fetch mock product data. The API endpoints used are:

- Products Endpoint: `https://fakestoreapi.com/products`
- Categories Endpoint: `https://fakestoreapi.com/products/categories`

## Folder Structure

```
finanshell-abc-store/
│
├── packages/
│   ├── web/               # Next.js web app
│   │   ├── components/    # React components
│   │   ├── pages/         # Next.js pages
│   │   │   ├── products/  # Products related pages
│   │   │   │   ├── [category].tsx   # Products by category page
│   │   │   │   └── [id].tsx          # Single product details page
│   │   ├── public/        # Static assets
│   │   ├── redux/         # Redux store setup
│   │   ├── styles/        # Global styles
│   │   ├── .gitignore     # Git ignore file
│   │   ├── package.json   # NPM package configuration
│   │   └── README.md      # Project documentation (web app)
│   │
│   └── mobile/            # Corresponding mobile app (not implemented)
│       ├── components/    # React Native components
│       ├── screens/       # React Native screens
│       ├── assets/        # App assets
│       ├── redux/         # Redux store setup (for mobile app)
│       ├── styles/        # App styles
│       ├── .gitignore     # Git ignore file
│       ├── package.json   # NPM package configuration
│       └── README.md      # Project documentation (mobile app)
│
├── .gitignore             # Git ignore file for the root directory
├── LICENSE.md             # License file
└── README.md              # Project documentation (root)
```

## Pages

### Products by Category

The products by category page displays all products under a specific category. The URL structure for this page is `/products/[category]`. For example, `/products/electronics`.

### Single Product Details

The single product details page shows detailed information about a specific product. The URL structure for this page is `/product/[id]`. For example, `/product/1`.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or new features to add, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
