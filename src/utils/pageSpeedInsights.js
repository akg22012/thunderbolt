function setUpQuery(baseUrl) {
  let cat =
    "category=ACCESSIBILITY&category=PERFORMANCE&category=SEO&category=BEST_PRACTICES";
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent(baseUrl),
    key: "AIzaSyDST-wfChodTSmITiXbOQSOw_VR2mMYtJI",
  };
  let query = `${api}?`;
  for (let el in parameters) {
    query += `${el}=${parameters[el]}&`;
  }
  return (query += cat);
}

export default setUpQuery;
