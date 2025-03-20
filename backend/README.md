# 🚀 A MERN Stack Social Media Platform

This is a Twitter-like social media platform where users can create posts, comment on posts or other comments, like posts and comments, follow other users, upload profile pictures, and view a personalized feed based on the activity of users they follow. 

---

## ⚙️ **Tech Stack**
- **Frontend:** React.js (Hooks & Context API), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **Authentication:** JWT (JSON Web Tokens)
- **File Storage:** Cloudinary / AWS S3
- **Deployment:** AWS / Heroku

---

## 🌟 **Features**

### ✅ **User Registration & Authentication**
- Sign up with email and password.
- Secure login with JWT-based authentication.
- Password reset via email.
- Email validation and password complexity rules.

### 👤 **User Profiles**
- Upload and display profile pictures (JPEG/PNG, max size: 5MB).
- Edit username and bio.
- Display followers and following count.

### 📝 **Posts**
- Create short posts (max 280 characters).
- View posts with timestamps.
- Delete own posts.
- Like/unlike posts.

### 💬 **Comments**
- Add comments to posts.
- Reply to existing comments (nested up to 3 levels deep).
- Delete own comments.
- Like/unlike comments.

### ❤️ **Likes**
- Like/unlike posts and comments.
- Display like count on each post/comment.

### 🔥 **Follow System**
- Follow/unfollow other users.
- Display follower and following counts on profiles.
- Feed displays posts from followed users.

### 📄 **Feed**
- Personalized feed showing posts from followed users.
- Fallback to trending/public posts if the user follows no one.
- Infinite scroll for seamless browsing.

---

## 🛠️ **API Endpoints**

### 👥 **User Endpoints**
- `POST /api/users/register` → Register a new user.
- `POST /api/users/login` → Login user and generate JWT token.
- `GET /api/users/:id` → Fetch user profile by ID.
- `POST /api/users/reset-password` → Reset password via email.

### 📝 **Post Endpoints**
- `POST /api/posts` → Create a new post.
- `GET /api/posts` → Fetch all posts.
- `GET /api/posts/:id` → Fetch a specific post.
- `DELETE /api/posts/:id` → Delete a post.

### 💬 **Comment Endpoints**
- `POST /api/comments` → Add a comment.
- `GET /api/comments/:postId` → Fetch comments for a post.
- `DELETE /api/comments/:id` → Delete a comment.

### ❤️ **Like Endpoints**
- `POST /api/likes` → Like/unlike a post or comment.

### 🔥 **Follow Endpoints**
- `POST /api/follow` → Follow/unfollow a user.
- `GET /api/followers/:id` → Get followers of a user.
- `GET /api/following/:id` → Get following users.

---

## 🔥 **Installation & Usage**

### 💻 1. Clone the Repository
```bash
git clone https://github.com/warghatsatyam/social-media-app.git
cd social-media-app

```
### 💻 2. Install server-side dependencie
```bash
cd backend
npm install

```
### 💻 3. Install client-side dependencies
```
cd ../frontend
npm install

```
### 💻 4. Add in the environment file

```bash
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
CLOUDINARY_URL=your-cloudinary-url

```
### 💻 5. Run backend
```
cd backend
npm start

```
### 💻 6. Run frontend
```
cd frontend
npm start

```

### 🌐 7. Access the Platform
Open http://localhost:3000 in your browser


### 🛠️ System Architecture
[Frontend: React] → [Backend: Node.js + Express] → [Database: MongoDB] → [Cloud Storage: Cloudinary/S3]

### 🔒 Security
- Passwords hashed using bcrypt.
- JWT-based authentication for session management.
- Input sanitization to prevent XSS and SQL Injection.
- Rate limiting on API endpoints.

### ⚡️ Performance & Optimization
- Page load time: < 2 seconds.
- API response time: < 500ms.
- MongoDB sharding for scalability.


### 🚀 Future Enhancements
- Real-time notifications using WebSockets.
- Direct messaging between users.
- Hashtags and trending topics.
- Media uploads (images/videos) in posts.


### 👥 Contributors
- Satyam Bharat Pratibha Warghat (myself)

### 📜 License
This project is licensed under the MIT License.

### 💬 Contact
For inquiries, reach out via:

- Email: warghatsatyam33@gmail.com
- GitHub: https://github.com/warghatsatyam


