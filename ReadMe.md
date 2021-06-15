## Welcome to the BeachPost app Check the [Live-Demo].⚡ here

### Stack used: MongoDb, ExpressJs, NodeJs, ReactJs

### Services: Google-OAuth, JWT, Multer-ImageUploads, Redux

    Front-End: This project uses React functional based components 
    Back-End: Node, MongoDb, Express
    Authentication(JWT-tokens)
    Authorization
    Google Login O-Auth
    Redux - globalstate management 
    Material-ui
    Pagination (load only few posts, increases speed, performance)
    
Please Note: I have used react-filebase64 for image conversion in this project 
But it will surely fill our database particularly -> documents (as they can be of just 16mb at max)
This is a demo project which is deployed on heroku (backend) where we have limited space, but in production builds we must use backend, multer or any other package for image uploads on the server in respective folders not inside the mongoDB's document.     

### Features and Description :
An app where users can share their experience of their interests like travel food fashion or anything like that. 
On this platform users can create post that can have an image, tags, title etc. 
Users can also edit or delete their posts, like or unlike others post's or even their own if they wish to. 
Users can login via google or their emails.
While browsing users can open a post where they can see more details about the post and also see the related posts with common tags

## Run the project Locally:
After cloning repository 
Install the dependencies
1. cd frontend - npm install
2. cd backend - npm i
3. create .env file in backend at root level (copy from .env.example file provided in the project)
   change the values of respected fields with your credentials
4. now run both frontend and backend by cd into those and npm start command
5. All set. Your project must be up and running at http://localhost:3000

### Project Flow
Signup/Login create, like  posts enjoy !

[Live-Demo]: https://beachpost.netlify.app