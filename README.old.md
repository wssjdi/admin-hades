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


六、React Router 4.0

React Router 4.0基本概念、基础语法

react-router:
react-router-dom:

  基于浏览器端的路由,浏览器端必须使用该插件,其包含了react-router的完整功能;
  4.0版本中已经不需要路由配置,一切皆组件
  react-router:提供了一些router的核心api,包括Router,Route,Switch等
  React-router-dom:提供了BrowserRouter,HashRouter,Route,Link,NavLink


react-router-dom核心用法：
  安装：
  npm install react-router-dom --save
  yarn add react-router-dom
  
  HashRouter和BrowserRouter:
    HashRouter:
      http://localhost:3000/#/admin/buttons;

    BrowserRouter:
      http://localhost:3000/admin/buttons;

  Route:path、exact、component、render
    exact=true 标识精准匹配
    如果是嵌套路由,则外层路由不能使用精准匹配，否则内层嵌套的路由将无法加载;
  
      <Route path="/admin/ui/buttons" component={Buttons} />
      
      <Route path="/admin" render={()=>
        <Admin>
          <Route path="/admin/home" component={Home} />
        </Admin>
      } />

  NavLink、Link:实现路由的跳转

    import {Link} from 'react-router-dom';
    
    const Header () => (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/question">QAS</Link></li>
          </ul>
        </nav>
      </header>
    )

    带参数的Link:
    <Link to={{pathname:'question/7'}}>QAS-7</Link>
    Link中的to可以是一个大对象{pathname:'/',search:'',hash:'',key:'123',state:{}}

    定义：<Route path="/question/:number" />
    取值：this.props.match.params.number可以取得对应的number值

  Switch:路由选择,使路由可以写在任意的组件中
    Switch 只加载匹配的第一个路由,不会加载多个路由组件
    <Switch>
      <Route path='/admin/ui/buttons' component={Buttons} />
      <Route path='/admin/ui/modals' component={Modals} />
      <Route path='/admin/ui/loading' component={Loading} />
      <Route path='/admin/ui/notification' component={Notice} />
      <Route path='/admin/ui/messages' component={Messages} />
      <Route path='/admin/ui/tabs' component={Tabs} />
      <Route path='/admin/ui/gallery' component={Gallery} />
      <Route path='/admin/ui/carousel' component={Carousel} />
    </Switch>

  Redirect:路由重定向
    <Redirect to="/admin/home"></Redirect>


Demo介绍:
  混合组件化：Link、HashRouter、Route


  配置化：路由单独抽离出来，不跟普通组件放在一起

  获取动态路由中的参数：
  {this.props.match.params.questionId}

  页面不存在,跳转到通用的404页面:
  <Route component={NoMatch}/>
  
          <Home>
            <Switch>
            {/* <Route exact={true} path="/" component={Main}/> */}
            <Route path="/main" render={()=>
              <Main>
                  <Route path="/main/:questionId" component={Question}></Route>
              </Main>
            } />
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topic}/>
            <Route component={NoMatch}/>
            </Switch>
          </Home>


实战用法







