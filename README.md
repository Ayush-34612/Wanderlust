# 🧭 Wanderlust

A full-stack Airbnb-inspired property listing platform where users can discover, create, and review travel stays across the world.

🌐 **Live Demo:** [wanderlust-shss.onrender.com/listings](https://wanderlust-shss.onrender.com/listings)

---

## 📸 Features

### 🏠 Listings
- Browse all available property listings on the home page
- View detailed listing pages with images, description, price, location, and owner info
- Create new listings with image upload (stored on Cloudinary)
- Edit and update your own listings including image replacement
- Delete listings (owners only)
- Interactive map on each listing page showing the exact location (powered by Mapbox)
- Category filters (Trending, Mountains, Pool, Camping, Farms, Arctic, etc.)
- Tax toggle to display total price after taxes

### 👤 Authentication & Authorization
- User signup and login with Passport.js (Local Strategy)
- Session-based authentication with persistent sessions stored in MongoDB via connect-mongo
- Flash messages for success and error feedback
- Protected routes — only logged-in users can create listings or reviews
- Only the listing owner can edit or delete their listing
- Only the review author can delete their review
- Redirect to intended page after login

### ⭐ Reviews
- Logged-in users can leave star ratings (1–5) and comments on listings
- Star rating UI using Starability CSS
- Reviews display the author's username
- Review authors can delete their own reviews
- Cascade delete — all reviews are deleted when a listing is deleted

### 🗺️ Map Integration
- Forward geocoding using Mapbox SDK — converts listing location to coordinates automatically on create/edit
- Interactive Mapbox GL JS map on listing show page
- Red marker pinpoints the exact listing location
- Popup on marker shows listing title and location

### ☁️ Image Upload
- Image upload via Multer and stored on Cloudinary
- Cloudinary image transformations for optimized loading
- Default placeholder image if no image is provided
- Image preview shown in edit form

### 🔒 Security
- Environment variables for all secrets (never hardcoded)
- HTTP-only cookies
- Session expiry (7 days)
- Encrypted session store via connect-mongo
- Input validation using Joi schema on both listings and reviews
- Custom error handling with meaningful error pages

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Templating | EJS, EJS-Mate |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js (Local Strategy) |
| Session Store | connect-mongo |
| Image Upload | Multer, Cloudinary |
| Maps | Mapbox GL JS, @mapbox/mapbox-sdk |
| Validation | Joi |
| Styling | Bootstrap 5, Custom CSS |
| Icons | Font Awesome 7 |
| Deployment | Render (backend), MongoDB Atlas (database) |

---

## 📁 Project Structure

```
Wanderlust/
├── controllers/
│   ├── listings.js       # Listing CRUD logic + geocoding
│   ├── reviews.js        # Review create/delete logic
│   └── users.js          # Signup, login, logout logic
├── models/
│   ├── listing.js        # Listing schema with geometry
│   ├── review.js         # Review schema
│   └── user.js           # User schema (passport-local-mongoose)
├── routes/
│   ├── listing.js        # Listing routes
│   ├── review.js         # Review routes
│   └── user.js           # Auth routes
├── views/
│   ├── layouts/          # Boilerplate EJS layout
│   ├── includes/         # Navbar, footer, flash partials
│   ├── listings/         # Index, show, new, edit views
│   └── users/            # Signup, login views
├── public/
│   ├── css/              # Custom styles + rating CSS
│   └── js/               # Client-side JS (map, validation)
├── utils/
│   ├── ExpressError.js   # Custom error class
│   └── wrapAsync.js      # Async error wrapper
├── init/
│   ├── index.js          # DB seed script
│   └── data.js           # Sample listing data
├── middleware.js          # isLoggedIn, isOwner, isReviewAuthor, validators
├── cloudConfig.js         # Cloudinary + Multer storage config
├── schema.js              # Joi validation schemas
└── app.js                 # Express app entry point
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following:

```env
ATLAS_URI=your_mongodb_atlas_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
SECRET=your_session_secret
```

---

## 🙋‍♂️ Author

**Ayush** — B.Tech Electronic Engineering, IIT (BHU) Varanasi

- GitHub: [@Ayush-34612](https://github.com/Ayush-34612)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).