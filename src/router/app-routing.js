import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../components/about'
import Data from '../components/data'
import Pricing from '../components/Pricing'
import NavBAR from '../components/navbar'
import Register from '../containers/register'
import Login from '../containers/Login'

const AppRouting = () => {
return (
    <BrowserRouter>
     <NavBAR/>
        <div className='col-12'>
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/pricing' component={Pricing} />
                <Route path='/data-accuracy' component={Data} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                {/* <Route exact path='/' component={Home} /> */}
                {/* <Route path='**' component={Error} /> */}
            </Switch>
        </div>
    </BrowserRouter>
)
}

export default AppRouting;