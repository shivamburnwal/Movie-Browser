import { useEffect, useState } from "react";

const NotFound = () => {
  const [containerHeight, setContainerHeight] = useState("100vh");

  useEffect(() => {
    const navbarElement = document.querySelector(".navbar");
    const navbarHeight = navbarElement ? navbarElement.scrollHeight : 0;
    const windowHeight = window.innerHeight;
    const newHeight = windowHeight - navbarHeight - 1;
    setContainerHeight(`${newHeight}px`);
  }, []);

  return (
    <div style={{ height: containerHeight }} className="container d-flex align-items-center">
      <div className="row justify-content-center vw-100">
        <div className="col-md-6 text-center">
          <h2 className="display-4">Page Not Found</h2>
          <p className="lead">The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
