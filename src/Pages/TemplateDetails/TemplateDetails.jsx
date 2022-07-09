import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "./../../Components/Core/Banner/Banner";

const TemplateDetails = () => {
  // Extract the specific template name from the query..
  const { id } = useParams();

  useEffect(() => window.scrollTo(0, 0))

  return (
    <div>
      <Banner title={id} />

      {/* // Todo: List out the project details */}

      {/* //* Project Background Image */}
      {/* //* Project Summary */}
      {/* //* Project Outline {whats included} */}
      {/* //* Project Dependency lists */}
    </div>
  );
};

export default TemplateDetails;
