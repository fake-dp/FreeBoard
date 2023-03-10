# Next.js 정리

---

## 설치 및 페키지

```
npx create-next-app
```

- 설치 목록

```
yarn add next@12.1.0 react@17.0.2 react-dom@17.0.2 --exact
yarn add @emotion/react
yarn add @emotion/styled
yarn add @apollo/client graphql
yarn add antd
yarn add @material-ui/core
yarn add axios
```

--

## 아폴로 기본 셋팅

```js
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
```
