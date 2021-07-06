// import React, { lazy } from 'react';
// import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';

// const delayLoad = (importComponent: any, fallbackComponent: any) => {
//   const LazyComponent = lazy(() => {
//     return importComponent;
//   });

//   return () => {
//     <React.Suspense fallback={fallbackComponent ? fallbackComponent : null}>
//       <LazyComponent />
//     </React.Suspense>;
//   };
// };

// function componentLoader(
//   importComponent: any,
//   attemptsLeft = 3,
//   interval = 1500
// ) {
//   return new Promise((resolve) => {
//     importComponent.then(resolve).catch(() => {
//       setTimeout(() => {
//         if (attemptsLeft === 1) {
//           alert('일시적인 오류입니다. 메인페이지로 이동합니다.');
//           window.location.href = '/';
//         }
//         componentLoader(importComponent, attemptsLeft - 1);
//       }, interval);
//     });
//   });
// }

// const progressBar = <div>로딩중...</div>;

// // component
// const Main = delayLoad(
//   componentLoader(import('../components/main')),
//   progressBar
// );

// export default function RouterSwitch({ location }: RouteComponentProps) {
//   //const RedirectMain = () => <Redirect to="/" />;
//   return (
//     <>
//       <Switch location={location}>
//         <Route exact path="/" component={Main} />
//       </Switch>
//     </>
//   );
// }

import React from 'react';

function Route() {
  return <div></div>;
}

export default Route;
