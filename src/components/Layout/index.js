import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import ProjectModal from '../ProjectModal'
import './index.scss'

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset modal state when route changes
    setShowModal(false);
    
    // Define different timings for each page
    let modalDelay;
    switch (location.pathname) {
      case '/':
        modalDelay = 10000; // Home page - 10 seconds
        break;
      case '/about':
        modalDelay = 20000; // About page - 20 seconds
        break;
      case '/portfolio':
        modalDelay = 15000; // Portfolio page - 15 seconds
        break;
      case '/contact':
        modalDelay = 10000; // Contact page - 10 seconds
        break;
      default:
        modalDelay = 12000; // Default - 12 seconds
    }

    // Show modal after the specified delay for the current page
    const timer = setTimeout(() => {
      setShowModal(true);
    }, modalDelay);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run effect when route changes

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* <span className="tags top-tags">&lt;body&gt;</span> */}

        <Outlet />
        {/* <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span> */}
      </div>
      
      {/* Site-wide Project Modal */}
      <ProjectModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Layout;
