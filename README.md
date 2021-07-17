# INKuisitor
Image processing and ML based, forensic offline signature verification Web Application 

## Abstract : 
Biometrics (or biometric authentication) refers to the method of identification of humans by their characteristics or traits. Biometrics is employed in computing as a sort of identification and access control which is one among the foremost secure methods to ensure human’s privacy.
The application uses a Convolution Neural Network (CNN) for distinguishing between forged and genuine signatures through a Siamese Neural Network. With an input of three signature images to create a new signature profile , store in database for later verification requests and a single input signature image used for verification of person’s identity.
## Available Scripts

In the project directory, you can run:

### `npm install `
Install dependencies (Important Node Modules to start the project)
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## Backend
- https://github.com/hossam507/INKuisitor-Backend

 ## To-Do List: 
- [x] implement UI and Layout
- [x] Divide application into pages
- [x] Enable routing (connect react router).
- [x] integrate with Backend server
- ## Verify Page: 
- [x] divide verify page into components
- [x] implement verify page form component
- [x] implement dynamic-content dropdown list(using React Select) 
- [x] implement signature pad to allow user to sign on the go  (using mouse cursor or touch pen)
- [x] implement uploading a file button (allow user to upload an already existing signature image on hard disk)
- [x] implement option selection (using React Select) to allow user to chose between signing either on signature pad or uploading a signature image
- [x] implement dynamic reactive component , changes upon getting response from server from form component to gauge component
- [x] implement gauge to show the percentage of the similarity between the provided signature and the stored on database one , and showing wether the signature is forged or geniune based on a pre-defined threshold (React-gauge)
- [x] handle side effects , fetch the profiles array from the server
- [x] handle sending POST request to server from verify component , and taking response put inside the gauge (percentage of similarity)
- ## Upload Page: 
- [x] divide upload page into compoennt
- [x] implement upload page's form component , allowing user to interact with a form to add a new client signature profile, same as the previous form.
- [x] implement dynamic reactive component , changes upon getting response from the the server that account is successfully created (react-success-indicator) , changing on the UI from form componet to the success indicator message 
- [x] handle sending a mulitpart POST request to the server ,contains name of the client profile and attached a FileList object , taking response to indicate successful creation of a new profile
- ## Others: 
- [x] implement Home page ,divide it into components , write a short brief about the application
- [x] implement other pages in the application , about and legal
- [x] Enhance Styling of the Application
