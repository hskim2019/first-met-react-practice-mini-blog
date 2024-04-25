# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


***
[처음만난 리액트](https://github.com/soaple/first-met-react-practice-v18) 강의를 들으면서 실습용으로 생성한 mini-blog 입니다.
***
[강의 메모](https://github.com/hskim2019/first-met-react-practice)

# Mini Project
- 프로젝트 생성
```
-- 프로젝트 생성
> npx create-react-app mini-blog
```

- 라이브러리 추가
```
-- react-router-dom 설치 : 리액트 앱에서 페이지 전환을 위해 사용하는 패키지
-- styled-components 설치 : 스타일링을 위한 library
-- package.json 파일이 관리하는 의존성 목록에 저장하겠다는 의미
> npm install --save react-router-dom styled-components
```

```json
// 설치 후 package.json 파일에 아래와 같이 dependencies 에 추가됨
// 이렇게 한 번 dependencies 에 추가되면 다음 사용자가 패키지들이 필요한지 일일히 확인해서 설치할 필요 없이 그냥 npm install 명령어만 실행하면 된다
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.8",
    "web-vitals": "^2.1.4"
  },
```
- react-router-dom 을 이용한 라우팅 구성 예시
    - 브라우저 라우터 컴포넌트는 웹브라우저에서 React 라우터를 사용하여 라우팅을 할 수 있도록 해주는 컴포넌트
    - 웹 브라우저에 히스토리라는 기능이 내장되어 있는데 여기에는 사용자가 탐색한 페이지들의 방문 기록이 저장된다
    - 브라우저 라우트 컴포넌트는 이 히스토리를 이용해서 경로를 탐색할 수 있게 해주는 컴포넌트
```javascript
// /places 로 접속하면 place-page 컴포넌트가 렌더링
<BrowserRouter>
    <Routes>
        <Route index element={<MainPage />} />
        <Route path="places" element={<PlacePage />} />
        <Route path="games" element={<GamePage />} />
    </Route>
</BrowserRouter>
```

- useNavigate()
    - react-router-dom 에서는 페이지 이동을 위한 useNavigate라는 훅을 제공한다

```javascript
function SampleNavigate(props) {
    const navigate = useNavigate();

    const moveToMain = () => {
        navigate("/");
    }

    return (
        ...
    );
}
```

- 미니 블로그에 필요한 기능
    - 글 목록 보기 기능(리스트)
        - PostList, PostListItem
    - 글 보기 기능
        - Post
    - 댓글 보기 기능
        - CommentList, CommentListItem
    - 글 작성 기능
        - PostWrite
    - 댓글 작성 기능
        - CommentWrite

- 폴더구조
    - src
        - component
            - list
            - page
            - ui : 버튼, 텍스트 등 사용자가 직접 입력할 수 있게 해주는 컴포넌트

- 라우팅
    - App.js 파일에 포함되어 있는 app 컴포넌트가 가장 처음으로 렌더링 되는 컴포넌트이기 때문에 여기에 구현한다
    - 리액트는 기본적으로 index.js 파일을 렌더링하게 되어 있어서 여기에 처음으로 렌더링 할 컴포넌트를 지정해줄 수 있다

- 빌드
    - npm run build 실행 시 build 폴더가 생성되고 javascript bundle 파일 등이 static 아래에 들어간다

- 서버 설치 (static 파일을 서빙해주는 역할)
    - npm install -g serve
    - srv -s build (가 오류가 발생하여 npx serve -s build 실행)
        (npx : 패키지를 설치하지 않고도 npm 레지스트리에서 원하는 패키지를 실행(Excute) 할 수 있다.)