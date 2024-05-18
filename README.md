# Index

- [React Router](#react-router)
- [Apex Chart](#apex-chart)
- [Recoil](#recoil)
- [React Hook Form](#react-hook-form)
  <br/>
  <br/>
  <br/>

# [React Router](https://reactrouter.com/)

- [RouterProvider](#routerprovider)
- [createBrowserRouter](#createbrowserrouter)
- [Route](#route)
  - [errorElement](#errorelement)
- [useNavigate | Link](#usenavigate--link)
- [useParams](#useparams)
- [Outlet](#outlet)
- [useOutletContext](#useoutletcontext)
- [useSearchParams](#usesearchparams)
  - searchParams
    - get(key)
    - getAll(key)
    - has(key)
    - delete(key)
    - set(key, value)
    - toString()
  - setSearchParams

## RouterProvider

기존 Routes대신 router파일을 사용가능 하게 해줌

```javascript
<Routes>
  <Route path="" element="<jsx/>" />
</Routes>
```

```javascript
import { RouterProvider } from "react-router-dom";
import router from "...";

root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
```

## createBrowserRouter

Object형식으로 라우트를 설정 할 수 있어 편함

```javascript
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
      errorElement: <NotFound />,
    },
    {...},
  ],
  { basename: process.env.PUBLIC_URL }
);
```

## Route

```javascript

```

### errorElement

```javascript
import NotFound from "..";

{
  errorElement: <NotFound />,
}
```

## useNavigate | Link

Link사용과 함수 링크 이동

```javascript
import { Link, useNavigate } from "react-router-dom";

const navigate = useNavigate();
const goToAbout = () => {
  navigate("/about");
};

return (
  <Link to="/">HOME</Link>
  <span onClick={goToAbout}>ABOUT</span>
)
```

## useParams

get params

```javascript
const params = useParams();
```

## Outlet

render child components (like 'Dynamic components' from vue.js)

```javascript
// router.tsx
createBrowserRouter({
  path: "/",
  children: [
    {
      path: "",
      element: <Home />,
    },
  ],
});
```

```javascript
// components.tsx
import { Outlet } from "react-router-dom";

return (
  <>
    <Outlet />
  </>
);
```

## useOutletContext

Outlet에서 보내준 context를 자식 components 에서 사용가능하다

```javascript
<Outlet context={{ authName: "chad" }} />
```

```javascript
const ctx = useOutletContext();
console.log(ctx);
```

## useSearchParams

URL 쿼리스트링을 사용하기 편하게 해주며 해당 함수를 가지고 있는 URLSearchParams 객체

```javascript
import { useSearchParams } from "react-router-dom";
// [value status function, set value function]
const [searchParams, setSearchParams] = useSearchParams();
```

searchParams methods: `append, delete, entries, forEach, get, getAll, has, keys, set, size, sort, toString, values`

setSearchParams: url을 변경해줌

ex: https://some-domain.com?username=chad&age=20&gender=male&skill=js&skill=react

### toString(key)

```javascript
searchParams.toString();
// ?username=chad&age=20&gender=male&skill=js&skill=react
```

### searchParams.get(key)

```javascript
searchParams.get("username");
// chad
```

### searchParams.getAll(key)

```javascript
searchParams.getAll("skill");
// ['js', 'react']
```

### searchParams.has(key): boolean

```javascript
searchParams.has("username");
// true
```

### searchParams.delete(key): void

```javascript
searchParams.delete("age"));
// undefined
searchParams.toString();
// ?username=chad&gender=male&skill=js&skill=react
```

### searchParams.set(key, value): void

```javascript
"";
searchParams.set("email", "combatguri92#gmail.com"); // 기존값 덮어쓰거나 추가
searchParams.append("hi", "hello-world"); // 값 추가
// ?username=chad&gender=male&skill=js&skill=react&email=combatguri92#gmail.com
```

### setSearchParams(searchParams)

```javascript
setSearchParams(searchParams);

// https://domain?username=chad&gender=male&skill=js&skill=react&email=combatguri92#gmail.com 로 url 변경됨.
```

# Apex Chart

APEX CHARTS
현대적이고 인터랙티브한 오픈 소스 차트

```
$ npm install --save react-apexcharts apexcharts
```

- https://apexcharts.com
- https://apexcharts.com/docs/react-charts

# [Recoil](https://recoiljs.org/)

- [install](#install)

### Install

```
$ yarn add recoil
```

### get Atom value use on Recoil

declare atom

```javascript
// in atom.ts
export const customAtom = atom({
  key: "custom",
  default: true, // any type
});
```

get value

```javascript
// in anyView.tsx
import { useRecoilValue } from "recoil";

const value = useRecoilValue(customAtom);
console.log(value); // light
```

set value

```javascript
// in anyView.tsx
import { useSetRecoilState } from "recoil";

const setAtomFn = useSetRecoilState(customAtom);
setAtomFn(false);
setAtomFn((prevValue) => !prevValue);
```

# React Hook Form

form 관리 라이브러리

### Install

```
$ npm install react-hook-form
$ yarn add react-hook-form
```
