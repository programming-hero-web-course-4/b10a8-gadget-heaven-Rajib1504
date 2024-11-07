<h1>Gadget World</h1>

<h2>Overview</h2>
<p>
    Welcome to <strong>Gadget World</strong>! Our platform offers a range of gadgets, including laptops, mobile phones, drones, and cameras. With a focus on quality, affordability, and a seamless user experience, Gadget World is designed to meet the needs of tech enthusiasts and casual buyers alike. Easily navigate categories, add items to your cart or wishlist, and enjoy dynamic, real-time interactions.
</p>

<h2>Live Website</h2>
<ul>
    <li><a href="https://gadget-universe.netlify.app" target="_blank">Visit Gadget World</a></li>
</ul>

<h2>Requirement Document</h2>
<ul>
    <li><a href="https://drive.google.com/file/d/1vB9TC4_iCBfaez3v1koAhCBL_x8KMC8A/view?usp=sharing" target="_blank">Requirement Document</a></li>
</ul>

<h2>List of React Fundamentals Used</h2>
<p>This project demonstrates various fundamental concepts of React, including:</p>
<ul>
    <li><strong>React Router:</strong> Used for creating a single-page application (SPA) with routes for different pages. Components like <code>createBrowserRouter</code>, <code>Navigate</code>, <code>NavLink</code>, and <code>Outlet</code> help manage navigation.</li>
    <li><strong>Component Structure:</strong> The project is divided into reusable components such as <code>Home</code>, <code>Dashboard</code>, <code>Wishlist</code>, and <code>Cart</code>. Smaller UI components like <code>GadgetsCards</code> and <code>CartList</code> promote modularity and separation of concerns.</li>
    <li><strong>State Management with useState:</strong> <code>useState</code> manages local states, including <code>cartList</code>, <code>wishlist</code>, and <code>totalCost</code>. Enables real-time UI updates based on user interactions.</li>
    <li><strong>Data Fetching with useLoaderData:</strong> <code>useLoaderData</code> from <code>react-router-dom</code> is used to load data when routes are accessed, ensuring data is available for rendering.</li>
    <li><strong>Side Effects with useEffect:</strong> <code>useEffect</code> manages tasks like setting document titles and loading data on component mount.</li>
    <li><strong>Conditional Rendering:</strong> Elements like the "Purchase" button are conditionally rendered to improve user experience.</li>
    <li><strong>Props for Data Passing:</strong> Data is passed between parent and child components using props, ensuring a structured data flow.</li>
</ul>

<h2>Data Management</h2>
<p><strong>Local Storage</strong> is used for data handling and persistence in this project:</p>
<ul>
    <li><strong>Storing Cart and Wishlist Data:</strong> Functions such as <code>addToCart</code> and <code>storeCartRemove</code> interact with local storage to keep cart and wishlist data saved. This allows users to retain their selections even when they refresh the page or close the tab.</li>
    <li><strong>Fetching Data on Load:</strong> Functions like <code>getFromCart</code> and <code>getFromWish</code> retrieve stored data when components mount, ensuring the cart and wishlist maintain saved data for a smooth, uninterrupted experience.</li>
</ul>

<h2>Key Features of Gadget World</h2>
<ul>
    <li><strong>Dynamic Category Filtering:</strong> Users can select categories to filter items dynamically, displaying only the products that belong to the chosen category.</li>
    <li><strong>Cart Purchase Functionality:</strong> Users can add items to the cart and make a "Purchase All" action to buy all items in one click, making shopping more convenient.</li>
    <li><strong>Wishlist Management:</strong> Products can be added to a wishlist, and the data persists through local storage, allowing items to remain in the wishlist across sessions.</li>
    <li><strong>Persistent Data Storage:</strong> Using local storage, users’ cart and wishlist data persist even if they close the tab. This ensures data is available when they return.</li>
    <li><strong>Smart Navigation Styling and Item Limiting:</strong> The navbar changes color based on the current route, enhancing navigation clarity. Additionally, users cannot add the same product multiple times, preventing duplicate entries in the cart.</li>
</ul>

<h2>Final Notes</h2>
<p>
    <strong>Gadget World</strong> utilizes modern React concepts to offer a user-friendly and interactive experience. With responsive design, real-time notifications, and smart data management, it provides a seamless shopping experience.
</p>
