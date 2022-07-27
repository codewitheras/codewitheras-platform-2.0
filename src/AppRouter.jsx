import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components imports
import Homepage from "./Pages/Homepage/Homepage";
import Aboutpage from './Pages/About/Aboutpage'
import Contactpage from "./Pages/Contact/Contactpage";
import Eventspage from "./Pages/Events/Eventspage";
import Projectspage from "./Pages/Projects/Projectspage";
import Templatespage from "./Pages/Templates/Templatespage";
// import Pricingpage from "./Pages/Pricing/Pricingpage";
import Donationpage from "./Pages/Donation/Donationspage";
import Challengepage from "./Pages/Challenges/Challengepage";
import Mentorpage from "./Pages/Mentorship/Mentorpage";
import Signuppage from "./Pages/Signup/Signuppage";
import Signinpage from "./Pages/Signin/Signinpage";
import Header from "./Components/Core/Header/Header";
import ProjectVideo from "./Pages/ProjectVideo/ProjectVideo";
import Showcase from "./Pages/Showcase/Showcase";
import RequestTemplate from "./Pages/Request/RequestTemplate";
import TemplateDetails from "./Pages/TemplateDetails/TemplateDetails";
// import ProtectedPage from "./Components/ProtectedPage/ProtectedPage";
import PageNotFound from "./Pages/404Page/PageNotFound";
import Contribute from "./Pages/Contribute/Contribute";
import JoinCommunity from "./Pages/JoinCommunity/JoinCommunity";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={Aboutpage} />
          <Route path='/contact' component={Contactpage} />
          <Route path='/contribute' component={Contribute} />
          <Route path='/events' component={Eventspage} />
          <Route path='/projects' component={Projectspage} />
          <Route path='/project/video/:id' component={ProjectVideo} />
          <Route path='/templates' component={Templatespage} />
          {/* <Route path='/pricing' component={Pricingpage} /> */}
          <Route path='/donation' component={Donationpage} />
          <Route path='/join-community' component={JoinCommunity} />
          <Route path='/challenge' component={Challengepage} />
          <Route path='/mentorship' component={Mentorpage} />
          <Route path='/showcase' component={Showcase} />
          <Route path='/request-template' component={RequestTemplate} />
          <Route path='/register' component={Signuppage} />
          <Route path='/template/:id' component={TemplateDetails} />
          <Route path='/signin' component={Signinpage} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
