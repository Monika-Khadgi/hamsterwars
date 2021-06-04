# Hamster war

Hamster war 2 weeks long project build with react. The goal of the project is to a create react app where user can battle hamsters. This project was created with [Create React App](https://github.com/facebook/create-react-app).

The app consist of home page, battle page and gallery page. 
* On home page we can find information about what this app is about and how we can use it.

* On battle page there are two ramdom photos of hamster side by side and user can vote for the one user think is the cutest.

* On gallery page there are all the hamster showen which are avaiable in database and from the gallery user can add new hamsters and remove old ones.

## Challanges

- One of the main challenges I ran into was while posting hamster info from frontend to backend. Previously, I was using port 6000 for backend and 3000 for frontend which was giving me authetication error. I solved the problem by changing the backend port to 8080.

* In the begining I was not able to get the hamster's information on hovering over hamster image. It took me a while to fix the css and get required result.

* Deploying backed was easy. While deloying frontend I kept getting this error bash: /tmp/codon/tmp/buildpacks/a2394be4b16b0b27b57bda9c93a64abfc5bcf702/bin/detect: No such file or directory
After some research in Internet, I found out that I have not set node engine in my package.json file.

* Initally, I was not able to display hamster images in gallery. Later, I moved all of my images to public folder then it worked.

* There was a bug at backend part while getting random id of hamster and I found it while working with frontend. I managed to fix the bug.

* I couldn't manage to upload the new image while adding new hamster. User can add hamster with information only.

## Available scripts to run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
