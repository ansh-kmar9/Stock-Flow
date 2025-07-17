
## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm (v6+)
- MongoDB (local or cloud instance)

---

### 1. Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the `backend/` directory with your MongoDB URI and any other secrets.

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000) by default.

---

### 2. Dashboard (Authenticated App) Setup

1. **Install dependencies:**
   ```bash
   cd ../dashboard
   npm install
   ```

2. **Start the dashboard:**
   ```bash
   npm start
   ```
   The dashboard will run on [http://localhost:3001](http://localhost:3001) by default.

---

### 3. Frontend (Landing Page) Setup

1. **Install dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start the frontend:**
   ```bash
   npm start
   ```
   The landing page will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Usage

- Visit the landing page at [http://localhost:3000](http://localhost:3000) to learn about StockFlow.
- Register or log in via the dashboard at [http://localhost:3001](http://localhost:3001).
- Use the dashboard to manage your stock portfolio, view analytics, and track your investments.

## Folder Structure

- **backend/**: Express server, MongoDB models (`model/`), and schemas (`schemas/`)
- **dashboard/**: React app for authenticated users, main dashboard UI and components
- **frontend/**: React app for the public landing page, product info, and support

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---

## Contact

For support or inquiries, please open an issue or contact the maintainer.
