import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.elements.username;
    const email = form.elements.email;
    const password = form.elements.password;

    dispatch(
      register({
        name: username.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <section>
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username</span>
            <input
              type="text"
              name="username"
              title="Only letters and spaces are allowed"
              required
            />
          </label>
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
          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        <p>
          * username can contain only letters and{' '}
          <span>
            spaces, but spaces not at the beginning and at the end, the length{' '}
            must be from 3 to 25 characters
          </span>
        </p>
        <p>
          * password must contain at least 8{' '}
          <span>characters, including one letter and one number</span>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;
