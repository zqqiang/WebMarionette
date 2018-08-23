import LoginPage from 'views/Pages/LoginPage.jsx';

// @material-ui/icons
import PersonAdd from '@material-ui/icons/PersonAdd';
import Fingerprint from '@material-ui/icons/Fingerprint';

const pagesRoutes = [
  {
    path: '/pages/register-page',
    name: 'Register Page',
    short: 'Register',
    mini: 'RP',
    icon: PersonAdd
    // component: RegisterPage
  },
  {
    path: '/pages/login-page',
    name: 'Login Page',
    short: 'Login',
    mini: 'LP',
    icon: Fingerprint,
    component: LoginPage
  }
];

export default pagesRoutes;
