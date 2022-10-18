// import React from "react";
// import Layout from "./src/components/Layout";

// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// };

// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };

// exports.onClientEntry = () => {
//   console.log("We've started!");
//   //   callAnalyticsAPI();
// };

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
};
