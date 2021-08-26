# MyMoviesApp

Mobile application developed with React Native using the free api “themoviedb”.

# Features 📋

- Login Screen: The first screen would be a Login screen with the app logo, an email and password field. In order to allow de user to continue to the Home screen, you need to authenticate the email and password by making a post request to the following api: POST https://reqres.in/api/login

- Save that token into the local storage of the phone and if you close the app and open it again, if the token was saved, then the login screen should not be shown, instead you need to go directly to the Home Screen

- Home Screen: Once the user is authenticated, the next screen would be the Home screen. This screen will have a top bar with a search textbox and button/icon. Then in the main body, you will need to show a list of Current Popular Movies with the following information: Title, Poster, Release date, Overview, The Average vote/rate.

- Search Screen: Now, about the top search Textbox and button/icon, The user will enter a search query for a movie name, for example: Avengers and tap the button/icon (or click Enter/Go in the keyboard). Then you should open a new screen and do a lookup in the api for all movies (not just popular movies) that have that query string in their name and show the list of movies the same way 
you show the Popular movies in the Home Screen. Just remember to add a label at the top that will show what’s the current search string for the results shown. Additionally, you should be able to go back to the Home Screen.


## Technologies 📋

- [React Native](https://reactnative.dev/docs/environment-setup)

- [React Navigation v5](https://reactnavigation.org/docs/getting-started)


### Starting 🚀

- Cloning the project

```
git@github.com:garciaEstefania/MyMoviesApp.git
```
- Running Metro Bundler

```
npx react-native start
```

- Running the app

```
npx react-native run-android
```


### Instalation 🔧

- To Install [React Native](https://reactnative.dev/docs/environment-setup)


## Guide 📖

You can find much more on how to use [React Native](https://reactnative.dev).

## Versioning 📌

React Native
> 0.64.2

React Native CLI
> 2.0.1

Node js
> 14.17.3

React Navigation
> 5.0

npx
> 7.19.1


