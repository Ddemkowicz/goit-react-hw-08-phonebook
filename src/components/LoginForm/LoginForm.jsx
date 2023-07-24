import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.email;
    const password = form.elements.password;

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <section>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              title="Enter a valid e-mail address"
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              title="Password must contain at least 8 characters, including one letter and one number"
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <p>
          * password must contain at least 8{' '}
          <span>characters, including one letter and one number</span>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
