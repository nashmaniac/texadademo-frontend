## Texada Demo Frontend

## How to run the project in local

This instructions assumes that `node`, `npm` and `vue-cli` is installed in your local

* Run `git clone git@github.com:nashmaniac/texadademo-frontend.git` to clone the repo in your local
* Run `cd texadademo-frontend` to get into work directory
* Run `npm install` to install all the dependency
* Make sure you set the correct value in your `.env` file
```
VUE_APP_API_SERVER=http://localhost:8000   # to be set correctly for your own
```
* You can also create a `.env.development` and paste the above line with proper value if your want to run in development mode
* Run the server using `npm run serve`
* The Server should be up and running at `http://localhost:8080`

---

## Project Structure
```
texaddemo-frontend
│
│
...
│
│
├── Dockefile                             # dockerfile for containerization
├── nginx
│   └── default.conf                      # config for dockerization
├── package-lock.json
├── package.json                          # dependency file
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── HelloWorld.vue
    │   ├── navigation.vue
    │   ├── pagination.vue
    │   └── search-bar.vue
    ├── filters
    │   └── timeUtils.js                  # filters file for time manipulation
    ├── main.js
    ├── modules                           # modules folder
    │   ├── products                      # products modules
    │   │   ├── components
    │   │   │   ├── product-edit.vue      # product edit component
    │   │   │   ├── product-list.vue      # product list component
    │   │   │   └── product-new.vue       # product new component
    │   │   ├── routes
    │   │   │   └── index.js              # routes for product
    │   │   └── services
    │   │       └── index.js              # services that handles https calls for product modules
    │   └── tracking                      # tracking modules. all the architecture are same as product modules
    │       ├── components
    │       │   ├── tracking-edit.vue
    │       │   ├── tracking-list.vue
    │       │   └── tracking-new.vue
    │       ├── routes
    │       │   └── index.js
    │       └── services
    │           └── index.js
    ├── network
    │   └── index.js                     # app networking utils
    ├── routes
    │   └── index.js                     # app routes
    └── utils
        └── notifications.js             # notifications utils that handle toast and alerts


```