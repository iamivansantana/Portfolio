import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
} from 'react-router-dom';
import ScrollTop from './ScrollTop';
import Portfolio from '../components/Portfolio';
import PortfolioMenuScreen from '../components/PortfolioMenuScreen';


const AppRoute = () => {
    return (
        <>
        <Router>
            <div>
                <ScrollTop />
                <Switch>
                <Route exact path="/" component={ Portfolio }/>
                        <Route exact path="/portfolio" component={ PortfolioMenuScreen }/>
                        {/* <Route exact path="/cart" component={ CartScreen }/>
                        <Route exact path="/sneaker/:sneakerId" component={ ArticlesScreen } /> */}
                        <Redirect to="/"/>
                </Switch>
            </div>

        </Router>
            
        </>
    )
}

export default AppRoute;
