import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/signin');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { 
            required: 'Name is required', 
            pattern: { value: /^[A-Za-z\s]{8,20}$/, message: 'Name must be 8-20 alphabetical characters' }
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <input
          type="email"
          placeholder="Email"
          {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email format' }
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <span className="error">{errors.username.message}</span>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', { 
            required: 'Password is required', 
            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, message: 'Password must be 8-20 characters, include uppercase, lowercase, number, and special character' }
          })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', { 
            required: 'Confirm Password is required', 
            validate: value => value === watch('password') || 'Passwords do not match'
          })}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}

        <input
          type="date"
          placeholder="DOB"
          {...register('dob', { required: 'Date of Birth is required' })}
        />
        {errors.dob && <span className="error">{errors.dob.message}</span>}

        <input
          type="number"
          placeholder="Phone Number"
          {...register('phone', { required: 'Phone Number is required' })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
