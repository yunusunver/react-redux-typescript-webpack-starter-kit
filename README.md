<h1 align="center" style="margin-top:100px">
<img src="https://user-images.githubusercontent.com/24482512/104732205-f043b700-574d-11eb-84fe-3842f9f26530.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104730911-f20c7b00-574b-11eb-9a6b-690efda3a8ee.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104730908-f173e480-574b-11eb-8c4d-4b3398fc8e2b.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104730913-f2a51180-574b-11eb-83e5-734e21526429.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104732470-5597a800-574e-11eb-9db2-e6dd2c02e684.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104733161-5715a000-574f-11eb-87a2-4b0baada6b1a.png" width="100" height="100%" display="inline">
<img src="https://user-images.githubusercontent.com/24482512/104733626-081c3a80-5750-11eb-94ef-c9170c9d4e9a.png" width="100" height="100%" display="inline">
</h1>

[Türkçe](https://github.com/yunusunver/react-redux-typescript-webpack-starter-kit/blob/main/Readme-TR/README.md) | [English](https://github.com/yunusunver/react-redux-typescript-webpack-starter-kit)

# React Redux TypeScript Webpack Starter Kit

The Starter Kit is created to guide developers. The Libraries that are used could be customized according to the developer's will. You can quickly develop React projects with TypeScript by using this project structure. You can manage your forms with the Redux-Form library that is used in the project. Textbox and Dropdown are used as samples of using Redux Form.

When you run the project for the first time, you will see the sample screen that's been created before. You can utilize the console in order to access form elements and properties on the screen. https://reqres.in/ REST-API address is used for authentication operations specifically for this example. Upon pressing the login button, the request will be sent to specified endpoint. The login operation is not related to form elements in this example. The request is sent with the user information provided by the api we use.

User Information: { email: 'eve.holt@reqres.in', password: 'cityslicka' }

Sample model, api, action, reducer structures were created for login and logout operations.

Webpack was used for the packaging process.

# Tech

React, Redux, Redux Form, Webpack, Babel, Typescript, Eslint, Prettier, Husky, Storybook, AntDesign

# Ready Structures

-   Routing
-   Redux Form

# Quick Start

```
git clone https://github.com/yunusunver/roadmapdeneme.git

npm install
npm run start
```

# Storybook Start

```
npm run storybook
```

# File Structure

```
  +---src
  |       +---actions
          |       DemoAction.ts
          |       index.ts
          |       Types.ts
          |
          +---api
          |       index.ts
          |       UserApi.ts
          |
          +---assets
          |   \---dist
          |       \---img
          |               reactIcon.png
          |
          +---components
          |   +---Layout
          |   |       ContentWrapper.tsx
          |   |
          |   \---ReduxForm
          |           FormInput.tsx
          |           FormSelect.tsx
          |
          +---models
          |       ApiBase.ts
          |       index.ts
          |       JsonResponseModel.ts
          |       LoginModel.ts
          |       ResultTypes.ts
          |       Settings.ts
          |       Token.ts
          |
          +---reducers
          |       ConfigureStore.ts
          |       DemoReducer.ts
          |       index.ts
          |
          +---styles
          |       index.scss
          |
          +---utils
          |       ApiHelper.ts
          |       index.ts
          |       StorageHelper.ts
          |
          \---views
              +---Demo
              |       demo.stories.tsx
              |       DemoView.tsx
              |
              \---DemoSecond
                      DemoSecondView.tsx
          |   App.tsx
          |   Globals.ts
          |   index.html
          |   index.tsx
```

# Home Page
![starterkit](https://user-images.githubusercontent.com/24482512/113512967-e755cb00-956f-11eb-8bd2-749949a6d6a9.PNG)
