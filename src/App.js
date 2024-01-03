// import { HashRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Layout from './components/Layout';
// import Portfolio from './components/Portfolio';
// import './App.scss';

// function App() {
//   return (
//     <HashRouter basename="/">
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="portfolio" element={<Portfolio />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//     </HashRouter>
//   );
// }

// export default App;

import Layout from './components/Layout';
import './App.scss';

function App() {
  return (
    <Layout/>
  );
}

export default App;
// import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import './App.scss'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App;
