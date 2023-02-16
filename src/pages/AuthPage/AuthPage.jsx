import LoginForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css'

export default function AuthPage({setUser}) {
  return (
    <main className='auth-page'>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  );
}
