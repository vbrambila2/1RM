// import React from "react";

// function FetchApi() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/movements")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   console.log(data);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default FetchApi;
