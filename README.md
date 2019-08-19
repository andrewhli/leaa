![leaa-banner](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/leaa-banner-github.png)

# Leaa (project 1d1h)

[![Build Status](https://travis-ci.com/SolidZORO/leaa.svg?token=dp93c7BFxq7zs1iT4qaM&branch=master)](https://travis-ci.com/SolidZORO/leaa)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4443217249ea4bbe8e057c691de4b0cd)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=SolidZORO/leaa&utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/SolidZORO/leaa/branch/master/graph/badge.svg?token=gdOhbSjkRy)](https://codecov.io/gh/SolidZORO/leaa)

Leaa is a monorepo CMS (Content Management System) built on the Nest.js + Next.js + GraphQL + Ant Design. The next major version of the plan will be added to the Online Store.

## **Monorepo-Packages**

- [x] **\_leaa-common**
- [x] **leaa-api** ([demo](https://test-leaa-api.herokuapp.com)) / backend (Nest.js + TypeGraphQL + MySQL + Docker Compose)
- [x] **leaa-dashboard** ([demo](https://test-leaa-dashboard.herokuapp.com)) / dashboard (React.js + Antd + MobX + Apollo / GraphQL)
- [x] **leaa-www** ([demo](https://test-leaa-www.herokuapp.com)) / website (Next.js + GraphQL)
- [ ] **leaa-miniprogram** / wechat-miniprogram (Taro.js + Taro-ui + GraphQL)
- [ ] **leaa-app** / iOS and Android (expo + GraphQL)

[# read more TODOS](#TODOS)

## **Install**

View the `README.md` of each sub-directory in `packages`. You may need to look at yarn [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) first.

## **Preview**

You can click `demo` link online preview, all demos are deployed in `heroku`, but the response is very SLOW, please be patient.

### Dashboard ([demo](https://test-leaa-dashboard.herokuapp.com))

##### dashboard-login

![dashboard-login](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/dashboard-login.png)

##### dashboard-user-edit

![dashboard-user-edit](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/dashboard-user-edit.png)

##### dashboard-mobile

![dashboard-mobile](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/dashboard-mobile.png)

### WWW ([demo](https://test-leaa-www.herokuapp.com))

##### www-index

![www-index](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/www-index.png)

##### www-login

![www-login](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/www-login.png)

##### www-mobile

![www-mobile](https://raw.githubusercontent.com/SolidZORO/leaa/master/designs/ui/www-mobile.png)

## **TODOS**

- [x] **\_leaa-common**
- [x] **leaa-api** ([demo](https://test-leaa-api.herokuapp.com)) / backend (Nest.js + TypeGraphQL + MySQL + Docker Compose)
  - [x] Auth
    - [x] JWT
  - [x] User
  - [x] Role
  - [x] Permission
  - [x] Article
  - [x] Attachment
    - [x] Local
    - [x] OSS
    - [x] OSS sync to Local
    - [x] @2x to @1x
  - [x] Ax (Ad)
  - [x] Category (infinity level)
  - [x] Logger
  - [x] Seed
  - [x] Setting
  - [ ] Order
  - [ ] Product
    - [ ] Specs (universal property)
  - [ ] Warehouses
  - [ ] Stocktaking
  - [ ] Statistics
  - [ ] Booking
  - [ ] Coupon
  - [ ] Promo
  - [ ] Payment
    - [ ] Alipay
    - [ ] Wechat
- [x] **leaa-dashboard** ([demo](https://test-leaa-dashboard.herokuapp.com)) / dashboard (React.js + Antd + MobX + Apollo / GraphQL)
  - [x] Auth
  - [x] User
  - [x] Role
  - [x] Permission
  - [x] Home
  - [x] Ax (Ad)
  - [x] Category (infinity level)
  - [x] Article
    - [x] WYSIWYGEditor
  - [x] Attachment
    - [x] Drop to Upload
    - [x] Drop to Sort
  - [x] Setting
  - [x] Error Boundary
  - [x] Responsive Design
  - [x] i18n
  - [ ] Order
  - [ ] Product
    - [ ] Specs (universal property)
  - [ ] Warehouses
  - [ ] Stocktaking
  - [ ] Statistics
  - [ ] Booking
  - [ ] Coupon
  - [ ] Promo
- [x] **leaa-www** ([demo](https://test-leaa-www.herokuapp.com)) / website (Next.js + GraphQL)
  - [x] Home
  - [x] Account
    - [ ] Login
      - [x] Email
      - [ ] Phone
      - [ ] Wechat
    - [ ] Register
      - [x] Email
      - [ ] Phone
      - [ ] Wechat
    - [ ] Forget Password
    - [ ] Profile
      - [ ] Upload Avatar
      - [ ] Bind / Unbind OAuth Account
    - [x] Logout
  - [x] Article
    - [x] List
    - [x] Item
  - [x] Banner Swiper
    - [x] Support Retina @2x
    - [x] Image Lazyload
  - [x] SEO (HtmlMeta)
  - [ ] Cart
  - [ ] Checkout
  - [ ] Payment
    - [ ] Alipay
    - [ ] Wechat
  - [ ] Order
  - [ ] Product
  - [ ] Booking
  - [ ] Coupon
  - [ ] Promo
- [ ] **leaa-miniprogram** / wechat-miniprogram (Taro.js + Taro-ui + GraphQL)
  - [ ] Home
  - [ ] Account
    - [ ] Login
    - [ ] Logout
  - [ ] Article
    - [ ] List
    - [ ] Item
- [ ] **leaa-app** / iOS and Android (expo + GraphQL)
  - [ ] Home
  - [ ] Account
    - [ ] Login
    - [ ] Logout
  - [ ] Article
    - [ ] List
    - [ ] Item

<br />
<br />

## **DEV LOG**

### 2019-08-01 23:39

从 git commit 可以看出，这篇 DEV LOG（开发日志）是现在才开始写的，项目本来叫做 1d1h，也就是一天一小时的意思，想着业余时间把之前写前后端的经验汇集起来，做个 Blog -> CMS -> Sohp 的开源项目，包括 API / Dashboard / Website / Wechat Weapp / React Native (iOS / Android)，因为是一套 monorepo，类似 interface / entry 这些都是共用的所以感觉做成全平台也是一件很顺手的事情。

其实本来想早点写这个开发日志，但早期一大堆需要解决的问题，时间都用在开发上了，实在抽不出时间写记录，现在想想还真不应该这样，毕竟之前的一大堆问题如果记录下来了，其实就是隐形财富，虽然再次遇到了自己肯定懂如何解决，但就没办法 share 给其他人了。不过接下来的日志我会慢慢回顾就对了。

这里说一下我对 Dashboard 的理解吧，我觉得一个最小可用的的 Dashboard 应该包括。

- 用户（登录 / 注册）
- 角色
- 权限
- 文件上传
- 广告
- 分类
- 文章
- 设置

这几个模块写完基本上就可以拿来当 Blog 用了，特别是角色权限这块，如果有业务需求，基于这样的最小化的 Dashboard 开发基本上可以说也很简单了。我在以往的项目里处理权限已经很多次了，不过这次因为是 graphql，和之前的 restful 稍有区别，还是花了一些时间折腾的。

用 Nest.js 写了那么多的代码，其实算不上舒服，选用的原因其实还是看中了他的一整套范式以及武装到牙齿的 Typescript 支持。作者 @kamilmysliwiec 还是非常厉害的，Nest.js 的一些封装实现非常精妙，最重要的还与各种技术相结合，落地了很多业务场景，这点真的非常赞的。

**`dashboard`** 上技术选型时常见的 React + Antd，不过这次因为全面上了 `hooks`，包括 Apollo 都是最新的 hooks beta 版本，整个项目几乎见不到 Class，但在大规模使用 hooks 后，感觉代码长得实在难看，如果以前 Class 代码清晰度打 10 分的话，hooks 只能打 5 分。当然，最明显的应该是赚了一个代码 Fn 共享，换做是 Class，想要 share Class 的 Fn，还是挺麻烦的。

**`www`** 部分没得选，只能是 Next.js 了，其实之前我有自研过一套较为完备的 React-SSR，但为了顺应浪潮，加上 @Guillermo 神在推上天天天吹，忍不住还是入手了 Next.js。我开始写 www 的时候刚好赶上 Next.js v9 发布，这是一个从 core 就开始用 TS 重写的船新版本。本以为用起来会很顺利，但没想到还是坑了……

毕竟需要集成 Antd，即意味着，Client 自己的 pages 代码需要对 less 用 cssModule，Antd 则不用，Server 那边则是看到 less 就扔。所以官方提供的 withLess 插件最多只能管 60%，剩下 40% 支持不到位。本来像 Next.js，CRA 这种就是把 webpack 包起来，前端毒瘤真不想你碰，配一下都是炒鸡麻烦。

但，我想说一个框架在项目初期给你几倍便利，那么它便会在项目后期给你带来几倍麻烦。CRA 如此，expo 如此，Next.js 也不例外，都是黑盒。那么我必须在两个小时内写一个 100% 符合我预期的 withPlugin 来，不然项目就卡了。翻了翻 Github 想看看有没有解决方案，但很不幸， v9 刚出根本找不到相关代码，看起来，只能 fuckingself 了。我虽对 webpack 很熟，但这 Next.js 在 webpack 上加了薄薄一层黑盒，写 withPlugin 有种被淹没在未知的 context 海洋中，是种非常憋屈的赶脚，不过还好，最终半小时搞定。提了个自带 resolve 的 [issue](https://github.com/zeit/next.js/issues/8054) 趁没被人发现赶紧 close 掉。希望给碰到同样问题的伙计在搜 issue 的时候带点帮助，毕竟需要 Next.js + antd withLess 的人还是很多的，特别是国内。

<br />

### 2019-08-15 20:45

时间过得好快，转眼半个月，最近没给 leaa 写什么新东西。重点放在了阿里云 OSS 整合这块。想要实现这样一个功能：

- Local 上传
- OSS 上传
- OSS 上传后备份到 Local
- OSS 上传 @2x 图片后，生成 @1x 上传回 OSS
- OSS 上传 @2x 图片后，生成 @1x 上传回 OSS 并备份到 Local
- 删除 OSS 需要触发删除 @1x 和 @2x 文件，并删除 Local 中的 @1x 和 @2x
- Local 和 OSS 是否开启均可配置
- 如 OSS 开启，为保证用户上传速度，所有上传直接走 OSS

其中过程还蛮艰辛的，涉及到 Local 和 OSS 之间的一些交互，而且因为直接走 OSS，所有请求不经 API，变成了等待 OSS 的 Callback，必须保证任何一步没做完都不能动 DB，勉强达到了幂等。
其实如果上传都走 API，然后由 API 统一处理再 put 到 OSS 会简单非非非非非非非常多，我这么做主要是担心做某些活动的时候，如果涉及到上传文件，并发就会很大，服务器缓不过来。所以拿 OSS 先挡一下还是很有必要的。

基本上 www 和 api 以及 dashboard 就告一段落了。明天开始 `miniprogram`。

<br />

### 2019-08-16 12:04

刚整理 package 的时候发现 React 升级到了 16.9.0，console 下一堆类似的 `Warning: componentWillMount...`，看了一下 React [CHANGELOG](https://github.com/facebook/react/blob/master/CHANGELOG.md#1690-august-8-2019) 发现的确是大改，未来版本要废弃几个 `lifecycle`。由于 leaa-dashboard 依赖 `antd`，所以还是等 `antd` 发版消除了这些 warning，再升上去。目前 React 是锁在 `"react": "16.8.6", "react-dom": "16.8.6"`。

<br />

### 2019-08-16 15:07

做了一个 Leaa Stack 的 Banner 放到 README 顶部，用图片描述使用的技术比文字好不少。另外提一下 `Leaa` 这个名字，这其实是我喜欢的一个法国女演员 [Léa Seydoux](https://zh.wikipedia.org/zh/%E8%95%BE%E9%9B%85%C2%B7%E7%91%9F%E6%9D%9C) 的名字，避免重名率过高，我在 Lea 后面多加了个 a。不过 `LEAA` 在 Google 最多的指向是 `Law Enforcement Assistance Administration` 美国一司法机构（笑）。

<br />

### 2019-08-17 11:21

刚在用 lint 在给项目做全面检测发现了几个 error，比较有趣的是 `packages/leaa-dashboard/src/pages/Permission/PermissionList/PermissionList.tsx` L159 这里，项目 `.prettierrc` 的 `printWidth` 和 `.eslintrc.js` 的 `max-len` 都设置成了 `120`，但这里 prettier 不报错，也不自动格式化，但是 eslint 和我说这里超 120 了。

我只好加了个 `eslint-disable-next-line max-len`，感觉很有可能他们其中一个是用了 `>` 一个是 `>=`，但是我去修改了两者的属性后发现不是这个问题，算了，先加个 max-len，目前只有一处是只有，标本不够就先不处理了。待日后这个问题多了再统一处理。

<br />

### 2019-08-17 14:16

虽然自己很注意 style code，也会用 IDE 配合 keymap 写 marco 套用 `prettier` 和 `eslint` 规则做 format。但项目 public 之后可能会有 contributors 进来（不，不会的 hhh），觉得还是在 `git commit` 卡一下 code style 会比较好。

通常项目上一个 [`husky`](https://github.com/typicode/husky) 就够了，但是 monorepo 文件那么多，每次 `git commit` 全 packages 所有文件都 `eslint` 必然会卡到爆，所以肯定是要配合 [`lint-staged`](https://github.com/okonet/lint-staged) 做最小化 eslint 处理的，只让此次 git stage 中文件去跑 eslint。

可是貌似官方没有给出太多针对 monorepo 的建议和范例。摸索了一番，发现其实也不麻烦，只是和 non-monorepo 不大一样而已。为了和 `pacakge.json` 解耦我还特意写成配置文件，大致长这样：

```javascript
module.exports = {
  'packages/**/*.ts?(x)': ['prettier --write', 'eslint', 'git add'],
  'packages/**/*.(css|less)': ['prettier --write', 'stylelint', 'git add'],
};
```

试了一下，速度还是蛮快的。要有更好的最佳实践可能还得用一段时间才知道效果了。

<br />

### 2019-08-18 11:42

试了大概一个晚上的 `Taro`，感觉不是特别理想，为什么呢？首先我需要的是一个 `React` to `小程序` 的框架，而且想要的是 `ONLY` 小程序，至于为什么是 ONLY，后面我会展开详细说明。

初步使用下来，感觉 `Taro` 感觉是一个集大成者，他身上的责任还蛮重的，需要兼容太多的 `类小程序` 环境，比如 `支付宝小程序`，`今日头条小程序` 等…… 而且还要考虑兼容 `RN` 那不友好的 `yoga` CSS 引擎，团队还是非常不容易的，能做到这这个程度，我还是非常佩服的，这里必须先给个赞。接下来我讲一下我几小时下来大概的感触。

##### H5 端

完美！正常 Web 开发一样，没什么好说的。支持 HRM，支持 css module。不用关心 `webpack`，上来就能 run。不过有一点值得注意，就是如果想要兼容 `RN`，那就不能用 [`taro-ui`](https://github.com/NervJS/taro-ui) 或是别的什么第三方 UI lib，只能使用内置的 `@tarojs/component`，这个限制感觉卡得比较厉害，期待 `taro-ui` 早日支持 `RN`。

##### 小程序端

也非常完美，说不上没什么不好的地方，run 起来后，打开官方微信 debug tools 顺利走起。唯一坑点是对 `monorepo` 支持不友好，当然这点也无可厚非，国内本来用 `monorepo` 的就少，用了肯定要自定义为「自己有能力解决 `monorepo` 上的任问题」的态度。我在 `monorepo` 下 run，遇到的是这个问题：

```
can't find module : ../../../node_modules/@tarojs/taro-weapp/
```

社区上也有一些人在提 issues 比如 [需要 monorepo 支持](https://github.com/NervJS/taro/issues/3116)，我的做法和他差不多，都是用 yarn wokespaces 的 [nohoist](https://yarnpkg.com/blog/2018/02/15/nohoist/) 去做处理，只不过我的方案是只让 `Taro` 相关的模块保留在 sub-package 下，别的该提升还是提升，最大化 share 了 modules：

```json
{
  "nohoist": ["**/@tarojs/**"]
}
```

##### React Native 端

看 `package.json` 里的 有 `dev:rn`，我就 run 了，结果是好的，看到提示编译成功，但就没有下文了…… 然后去官方 [docs](https://nervjs.github.io/taro/docs/react-native.html) 看了下，感觉略复杂，那这和单独折腾一套原生 RN 开发有什么区别？而且依赖 `Taro` 的话，`RN` 版本锁在 `0.55.4`,天啊！这和官方目前 `0.60.x` 的版本号相距甚远，要知道 `RN` 每一个版本迭代都是质的飞跃，如果用上 `0.60.x` 还能在 Android 上赚一个 [Hermes](https://github.com/facebook/hermes)，效率也是大幅提升。另外还有一个让我顾虑的是，用上`RN@Taro`，意味着只能使用 `@tarojs/component`  这个 UI lib，也就是意味着要放弃掉 [`NativeBase`](https://docs.nativebase.io/) 和 [`Shoutem`](https://shoutem.github.io/docs/extensions/tutorials/getting-started) 这两个在 `RN` 上相对优质的 UI lib。

嗯…… 综上考虑，如不是一心想为了节约成本和时间，想着 `一套代码多处运行 ` ，目前还是建议放弃 `RN@Taro` ，如果要说一个最佳的切入时机，我认为是至少 [`taro-ui`](https://github.com/NervJS/taro-ui) 支持了 `RN` ，当然，这个代价实在太高，官方永远不去做支持也是非常有可能的。



好啦回到正题，我使用 `Taro` 的初衷一开始就是用来 ONLY for 小程序的，所以对于目前的情形我觉得「一切 OK」。`leaa-app` 那边还是 `RN` 或者 `expo` 处理就好，毕竟坑基本上在以往项目踩完了（笑）。



<br />

### 2019-08-18 22:18

记录一下今天白天用 `Taro` 的心得，真是满满的心酸啊……

- 首先，比较痛苦的是不支持 `@apollo/react-hooks` 和 `react-apollo`！也就是说，任何 Apollo 官方的包都不可以用了！不能 `useQuery` 连 `<Query>` 都不让，用就给你报 hooks 那经典的错误 `Invariant Violation: Invalid hook call.` 结果是直接用写好 export `apolloClient` 后 `apolloClient.query()`，这真是一夜回到解放前啊！

- 本来想着方便，在 `H5`模式下 debug，`apolloClient` 这种方式能跑起来已经很开心了，没想到…… `小程序` 模式弹 error 了，说 `fetch is not found globally and no fetcher passed, to fix pass....` 查了下资料说是 「微信小程序在某一次升级中， 移除了全局的fetch」这……，还好，马上找到了前辈写的 lib [wx-apollo-fetcher](https://github.com/kdong007/wx-apollo-fetcher)。整个库就几行：

  ```
  return new Promise(resolve =>
  wx.request({
      ...
      complete: ({ data, statusCode, errMsg }) => resolve({...})
  }))
  ```

  然后在 `HttpLink` 那边替换一下变成 `fetch: wxApolloFetcher` 就好了。万万没想到微信还会做这种断崖式更新，真是骚操作。

- 再就是路径 `alias` 的问题，[官方 issues 这贴](https://github.com/NervJS/taro/issues/1598)讨论得最激烈，我看完后试了，依然无解。这里的无解是 `小程序` 端无解，`H5` 端是好的。这…… 我这好歹是 `monorepo`，要是不能 share `@leaa/common ` 包里的代码，那会变得很尴尬。行吧，我先不复用，忍忍。

本以为经历过 `RN` 的开发已是煎熬，但这次…… 哎，不说了，怪自己用的技术太新（啪）。



<br />

### 2019-08-19 15:26

托 `Taro` 的福。折腾了半天 `alias` 的问题在 `小程序` 模式下是彻底无解了。不过在解这个问题的同时有一个新发现。就是 `monorepo` 其实不应该在 `tsconfig.json` 写 `alias paths` 的。之前我的做法是这样。

```
// tsconfig.json

{
  "compilerOptions": {
    "paths": {
      "@leaa/common/*": ["../_leaa-common/src/*"],
      "@leaa/api/*": ["./src/*"]
    }
  }
}
```


```
// .babelrc.js

plugins: [
	...
  alias: {
    '@leaa/common': '../_leaa-common/src',
    '@leaa/api': './src',
  },
  ...
],

```


```
// package.json

"dependencies": {
  "@leaa/common": "^0.0.2",
  "@leaa/api": "^0.0.2",
}
```

一共有三个地方要写 `alias`，如果加入了 `jest`，还需要在 `jest.js` 写上:

```
// jest.js

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');
...
moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
...
```

这是图什么呢? 就图个在 import 的时候可以这样：

```
import { JwtStrategy } from '@leaa/api/strategies';
```

而不是： 

```
import { JwtStrategy } from '@leaa/api/src/strategies';
```

天啊，就为了少些一个 `/src` 做了那么多工作，感觉不合理 ! 非常不合理！必须统统改掉。~~只在 `package.json` 加入 `dependencies` 就好~~，只在 `package.json` 和 `tsconfig.json` 加入 `path mapping` 别的都删掉。



1， 2， 3，好，改完了。



那回过头， `.babelrc.js` 的 `module-resolver` 有没有用呢? 当然也是有的咯，我觉得如果不是 `monorepo` 的时候用来以 `@utils` `@graphqls` 这种代替真实目录就很好啊。不用写一堆 `../../../../../` 但是如果是 `monorepo`，觉得直接 `package.json` 直接依赖就好，简单明了。