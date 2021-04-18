import React from "react";
import useForm from "./useForm";
import validate from "./validate";
import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const FormContentRight = styled.div``;

export const Form = styled.form`
  max-width: 285px;
  margin: 0 auto;
  font-size: 15px;

  h4 {
    margin-bottom: 1rem;
  }
`;

export const FormInputContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  p {
    font-size: 12px;
    color: red;
  }
`;

export const FormInput = styled.input`
  padding: 0.3rem 0.5rem;
  border: solid 0.5px #efefef;
  border-radius: 4px;
  width: 100%;

  &:focus {
    outline-color: #0467fb;
  }
`;

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <FormContentRight>
        <Form onSubmit={handleSubmit}>
          <h4>
            Get with us today! Create your account by filling out your
            information below.
          </h4>
          <FormInputContainer>
            <FormInput
              type="text"
              name="username"
              placeholder="Enter your username"
              id="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInput
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.email}</p>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInput
              type="password"
              name="password"
              placeholder="Enter Password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.password}</p>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInput
              type="password"
              name="password2"
              placeholder="Confirm Password"
              id="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.password2}</p>}
          </FormInputContainer>
          <Button primary margined type="submit">
            Sign up
          </Button>
          <div>
            Already have an account? Log in <a href="/#">here</a>
          </div>
        </Form>
      </FormContentRight>
    </>
  );
};

export default SignupForm;
