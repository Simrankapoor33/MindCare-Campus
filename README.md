# MindCare Campus

MindCare Campus is a comprehensive platform designed to support mental health and well-being within educational institutions. It provides resources, tools, and a supportive environment for students, faculty, and staff to access mental health services, track wellness activities, and foster a more mindful campus community.

## Project Overview

MindCare Campus aims to:
- Offer easy access to mental health resources and emergency contacts
- Connect users with professional counselors and peer support groups
- Allow tracking of personal wellness and mindfulness activities
- Raise awareness and reduce stigma around mental health issues within the campus

Key features include:
- User-friendly dashboard for students and staff
- Anonymous support and chat features
- Appointment scheduling with counselors
- Resource library with articles, videos, and self-help guides
- Notifications and reminders for wellness activities

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Simrankapoor33/MindCare-Campus.git
   cd MindCare-Campus
   ```

2. **Install dependencies**
   - If the project uses Node.js:
     ```bash
     npm install
     ```
   - If using Python (Django/Flask), set up a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate
     pip install -r requirements.txt
     ```

3. **Configure environment variables**
   - Create a `.env` file in the project root and add necessary configuration (e.g., database URL, secret keys).

4. **Run database migrations**
   - For Node.js (with Sequelize/TypeORM):
     ```bash
     npm run migrate
     ```
   - For Django:
     ```bash
     python manage.py migrate
     ```

5. **Start the development server**
   - Node.js:
     ```bash
     npm start
     ```
   - Django:
     ```bash
     python manage.py runserver
     ```

## Usage

- Access the app via `http://localhost:3000` (Node.js) or `http://127.0.0.1:8000` (Django)
- Register as a new user or login with your campus credentials
- Explore the dashboard to access resources, schedule appointments, and track activities
- Use the support chat for anonymous help or connect with counselors directly
- Browse articles and guides to learn about mental health topics
- Set reminders for wellness activities and track your progress

## Technologies Used

- **Frontend**: React.js / Angular / Vue.js (specify actual framework)
- **Backend**: Node.js (Express) / Python (Django/Flask) (specify actual backend)
- **Database**: MongoDB / PostgreSQL / MySQL (specify actual DB)
- **Authentication**: JWT / OAuth2 / Campus SSO
- **Real-time Features**: Socket.IO / WebSockets (for chat/support)
- **Styling**: CSS3, SCSS, styled-components, Material UI, Bootstrap
- **Deployment**: Docker, Heroku, Netlify, AWS (specify if applicable)



*For any queries or support, please contact the repository maintainer or open an issue.*
