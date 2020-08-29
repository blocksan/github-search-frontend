# Github Searcher Frontend Service  ( [github-search-frontend](https://github.com/blocksan/github-search-frontend) )
It is the frontend application which will serve the UI for the github searcher application built with ***infinite scroll*** and ***multi stage docker build***.
Following technologies have been used while building this application
#### Technologies used
1. ***Reactjs***
2. ***Redux***
3. ***Redux Thunk***
4. ***React Persist*** (session storage)
5. ***React Router***
6. ***SASS*** stylings
7. ***Font Awesome*** for icons
8. ***Jest Enzyme*** for unit testing
9. ***React Moment*** 
10. ***React Memoization*** 

#### Decisions made during the development
1. ***Infinite Scrolling*** - 
     - Github API results only 30 items at a time, hence to see the other results either we can use trivial solution i.e Pagination or Infinite Scroll. 
     - I Chose ***Infinite Scroll*** as the application is mobile friendly hence it will be easier for the user to swipe UP. 
2. ***Multi Stage Build*** 
     - I chose multi stage docker build for the frontend to make the container size very small and other advance advantages we can get like Zofli compression (Can be added in Extended Scope).
3. ***Session Storage*** -  
    -  To cache the API result we can either use local storage or session storage. I chose session storage as it will clear the store on browser close and tab close. 
    -  By clearing the frontend store, we can easily simulate and see the performance enhancement from the REDIS cache which is implemented at backend. 

#### Screen sizes available
1. UHD Desktop - 2560*
2. Large Screen - 1440*
3. Medium Screen - 1280*
4. Ipad/Small Screen - 768*
5. Mobile Screen - 380* | 425*


### Following are the some snapshots of the application
##### Home page
[![dPTiWN.md.png](https://iili.io/dPTiWN.md.png)](https://freeimage.host/i/dPTiWN)

##### Loading screen
[![dPTssI.md.png](https://iili.io/dPTssI.md.png)](https://freeimage.host/i/dPTssI)

##### User results
[![dPTQft.md.png](https://iili.io/dPTQft.md.png)](https://freeimage.host/i/dPTQft)

##### User results hover
[![dPTZ0X.md.png](https://iili.io/dPTZ0X.md.png)](https://freeimage.host/i/dPTZ0X)

##### Repository results
[![dPTtgn.md.png](https://iili.io/dPTtgn.md.png)](https://freeimage.host/i/dPTtgn)

##### Repository results hover
[![dPTm5G.md.png](https://iili.io/dPTm5G.md.png)](https://freeimage.host/i/dPTm5G)

##### Infinite Scrolling
[![dPTpef.md.png](https://iili.io/dPTpef.md.png)](https://freeimage.host/i/dPTpef)

##### Screen size 425
[![dPT4bR.md.png](https://iili.io/dPT4bR.md.png)](https://freeimage.host/i/dPT4bR)

##### Screen size 768
[![dPTPxp.md.png](https://iili.io/dPTPxp.md.png)](https://freeimage.host/i/dPTPxp)

#### Features included in this frontend service
  -  **Infinite Scrolling** 
  -  **Store Rehydration** using React Persist
  -  **API Caching** using sessionStorage
  -  **JSDoc Comments** for the internal components
  -  **Component Based structure** 
  -  **Test Cases** (action and reduces)
  -  **Dockerized** container with development mode
  -  **Dockerized** container with production mode

#### Available Components
  -  HeaderComponent
  -  ContentComponent
  -  ComponentsWrapper
  -  RepositoryCardComponent
  -  UserCardComponent
  -  SearchComponent
  -  SearchWrapperComponent
  -  HeaderWrapperComponent

### How to run this project
### Option 1 - Without Docker
##### Run project [ without ] ~~DOCKER~~
**Node/NPM should be preinstalled in the host machine
Run the following commands
```
git clone https://github.com/blocksan/github-search-frontend.git

cd github-search-frontend

touch .env
    -  Add the base url for the server in the .env file
yarn install

npm install -g env-cmd

yarn start
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
yarn test
    Launches the test runner in the interactive watch mode.
````

### Option 3 - With Docker
This project contains 2 versions of Dockerfile 
1. ***Dockerfile***  Production
2. ***Dockerfile.dev*** Development (with hot reloading)
##### Run project [ with ] DOCKER
Run the following commands

```
git clone https://github.com/blocksan/github-search-frontend.git

cd github-search-frontend

touch .env
    -  Add the base url for the server in the .env file
docker build -t github-search-frontend:latest .

docker run -p 3000:3000 github-search-frontend
```
Open [http://localhost:3000](http://localhost:3000) to view the running application in the browser

###### Stay in touch
[Sandeep Ghosh](http://sandeepghosh.com)


