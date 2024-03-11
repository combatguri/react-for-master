## 코인 리스트

```
api https://api.coinpaprika.com/v1/tickers

https://api.coinpaprika.com/#tag/Coins/paths/~1coins/get
https://docs.coinone.co.kr/docs/about-public-api
```

## 영화리스트

```
list https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
detail https://yts.mx/api/v2/movie_details.json?movie_id=59933

https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
```

## git pages

```
yarn add gh-pages
Route path={`${process.env.PUBLIC_URL}/`} element={< Home />}
```

### pakage.json

```
"homepage": "https://combatguri.github.io/practice-movie-1"

"scripts": {
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build"
},

npm run deploy
```
