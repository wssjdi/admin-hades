# admin-hades
Admin On React &amp; Antd

一、项目初始化：
npm install -g create-react-app
create-react-app my-app-name

cd my-app-name
npm start

二、React生命周期包含哪些：
getDefaultProps
getInitialState
componentWillMount
render
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount

三、安装基础插件：

安装React-Router：
yarn add react-router-dom axios less-loader

安装Axios：

安装Less：最新的版本有冲突，所以降级到2.7.3版本
yarn add less@^2.7.3

安装AntD：
yarn add antd


暴露Webpack配置文件：
 yarn eject
 
安装less-loader:
  AntD是基于Less开发的，但是React脚手架并没有安装Less,所以需要暴露Webpack配置之后安装less-loader;

修改less-loader：
  Webpack默认配置中没有解析less文件的模块，需要自己手动添加，功能添加在CSS解析模块的前面，在Less文件解析模块中，less-loader需要放在postcss-loader的后面，因为Webpack的解析机制是从后往前的顺序；
  另外在修改完webpack.config.dev.js之后需要同步到webpack.config.prod.js中，否则上线之后和开发环境不一致.

安装babel插件：
  可以实现按需加载文件功能，不用加载整个包
  yarn add babel-plugin-import
  修改webpack.config.prod.js的配置,使按需加载的功能生效：  
            options: {
              plugins:[
                ['import',[{
                  libraryName:'antd',
                  style:true
                  }]
                ]
              ],
              compact: true,
            }
  如果想要修改主题配置的时候，那么就可以在配置文件中直接修改了：  
              {
                loader:require.resolve('less-loader'),
                options:{
                  modules:false,
                  modifyVars:{
                    "@primary-color":"#7CCD7C"
                  }
                }
              }

五、项目主页结构搭建：
24列格栅系统






