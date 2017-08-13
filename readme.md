# How to Run

Setup dependency
```
yarn install  or yarn
or
npm install
```

Run
```
npm start
or
yarn start
```

# How to build
https://ryan-miao.github.io/2017/08/01/hello-react-js/

# step
https://ryan-miao.github.io/2017/08/03/react-tutorial-1/

# Note
react入门最后一个完整的例子是 `app/components/ProductList.jsx`。其中，数据流程是：![](http://oe20lp6p0.bkt.clouddn.com/blog/2017/productList-data-flow.png)

## How to print structure
```shell
find . -print | grep -v "node" | grep -v "git" |  sed -e 's;[^/]*/;|____;g;s;____|; |;g' > structure.txt
```
 
# 参考
- https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-webpack-installation-and-configuration
- https://yarnpkg.com/zh-Hans/docs/usage
