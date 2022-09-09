## backend admin manage ui

###### Description

- backend admin manage ui

###### Technology stack

- typescript,vue3,yarn,vite

###### Environment prepare

- install npm：
  
  - [node env install(required)](https://www.runoob.com/nodejs/nodejs-install-setup.html)
  - [node version manage install(optional)](https://www.runoob.com/w3cnote/npm-switch-repo.html)

- install yarn
  
  ```
  npm install -g yarn
  ```

- install dependencies
  
  ```shell
  yarn install
  ```

###### Start dev

```shell
yarn dev
```

visit：[http://127.0.0.1:5173/x-admin-web](http://127.0.0.1:5173/x-admin-web)

###### Deploy

- build
  
  ```shell
  yarn build
  ```

- static hosting
  
  - [github pages](https://cuukenn.github.io/x-admin-web)
    
    ```shell
    yarn deploy:github
    ```
  
  - [gitee pages](https://cuukenn.gitee.io/x-admin-web)
    
    ```shell
    yarn deploy:gitee
    ```
