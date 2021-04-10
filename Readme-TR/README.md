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

# React Redux TypeScript Starter Kit

Starter Kit, geliştiricilere rehber olması amacıyla oluşturulmuştur. Kullanılan kütüphaneler geliştiricinin isteğine göre şekillendirilebilir. Bu proje yapısını kullanarak hızlı bir şekilde TypeScript ile React projeleri geliştirebilirsiniz. Projede kullanılan Redux-Form kütüphanesiyle formlarınızı yönetebilirsiniz. Redux Form kullanımına örnek olarak `Textbox` ve `Dropdown` kullanılmıştır. <a href="https://redux-form.com/8.3.0/docs/gettingstarted.md/">Redux-Form</a>

Projeyi ilk çalıştırdığınızda önceden hazırlanmış olan örnek bir ekran ile karşılaşacaksınız. Ekranda bulunan form elemanlarına ve özelliklerine erişmek için konsolu kullanabilirsiniz. Bu örnek özelinde authentication işlemleri için https://reqres.in/ REST-API adresi kullanılmıştır. Login tuşuna basıldığında belirtilen endpoint'e istek atılır. Bu örnekte login işleminin form elemanlarıyla bir ilgisi yoktur. Kullandığımız api'nin bize sağladığı kullanıcı bilgileriyle istek atılır. 

Kullanıcı Bilgileri: `{ email: 'eve.holt@reqres.in', password: 'cityslicka' }`

Login ve logout işlemleri için örnek model, api, action, reducer yapıları oluşturulmuştur.

Paketleme işlemi için Webpack kullanılmıştır.

# Teknolojiler

React, Redux, Redux Form, Webpack, Babel, Typescript, Eslint, Prettier, Husky, Storybook, AntDesign

# Hazır Yapılar

-   Routing
-   Redux Form

# Hızlı Başlangıç

```
git clone https://github.com/yunusunver/react-redux-typescript-webpack-starter-kit.git

npm install
npm run start
```

# Storybook'u Çalıştırma 

```
npm run storybook
```

# Dosya Yapısı

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

# Ana Sayfa
![starterkit](https://user-images.githubusercontent.com/24482512/113512967-e755cb00-956f-11eb-8bd2-749949a6d6a9.PNG)
