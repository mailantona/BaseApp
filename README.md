# baseapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Старт сервер:
cd .\backend
npm start

# Расширения для Visual Studio Code
1. Copy Relative Path
2. Vetur
3. Color Picker
4. vue-beautify











<ul class="list-unstyled components">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Главная</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Home 1</a></li>
                        <li class="active"><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{name: 'customers'}">Клиенты</router-link>
                    <!-- <a href="customers"></a> -->
                </li>
                <li>
                    <router-link :to="{name: 'employees'}">Сотрудники</router-link>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </li>
            </ul>