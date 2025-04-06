This project is a **Node.js CRUD API** for managing user enquiries, built using the **MVC architecture**. It uses **Express.js**, **MongoDB (Mongoose)**, and follows best practices for scalable backend development.


## 🚀 Features

- ✅ Create a new enquiry
- 📋 Get a list of all enquiries
- ✏️ Update an existing enquiry by ID
- ❌ Delete an enquiry by ID
- 📂 Organized using MVC Pattern

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Dotenv for environment variables
- Nodemon (for development)

---

## 📁 Project Structure

mongoose_curd/ │ ├── index.js # Entry point ├── .env # Environment variables ├── .gitignore # Git ignore rules ├── package.json # Dependencies and scripts │ ├── src/ │ ├── config/ │ │ └── db.js # MongoDB connection logic │ ├── models/ │ │ └── enquiry.model.js # Mongoose schema for enquiry │ ├── controllers/ │ │ └── web/ │ │ └── userEnquiryController.js # Controller functions │ ├── routes/ │ │ └── web/ │ │ └── enquiryRoutes.js # Express routes │ └── utils/ │ └── helpers.js # Utility functions (optional)

yaml
Copy
Edit

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mongoose_curd.git
   cd mongoose_curd
Install dependencies

bash
Copy
Edit
npm install
Configure .env file Create a .env file in the root directory:

ini
Copy
Edit
PORT=5000
DBURL=mongodb://localhost:27017/enquiryDB
Run the app

bash
Copy
Edit
npm start
🧪 API Endpoints
Method	Endpoint	Description
POST	/web/api/enquiry/insert	Create a new enquiry
GET	/web/api/enquiry/list	List all enquiries
PUT	/web/api/enquiry/update/:id	Update enquiry by ID
DELETE	/web/api/enquiry/delete/:id	Delete enquiry by ID
🌐 Pushing Your Code to GitHub
bash
Copy
Edit
# Initialize a git repo
git init

# Add files to staging
git add .

# Commit the changes
git commit -m "Initial commit for enquiry CRUD project"

# Link to GitHub (replace with your actual repo URL)
git remote add origin https://github.com/your-username/mongoose_curd.git

# Push the code
git push -u origin main

🤝 Author
Made with ❤️ by Abhay Dubey
📧 dubeyabhay430@gmail.com
🔗 GitHub

