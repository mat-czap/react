import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 90%;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 ;
`;


localStorage.getItem('itemName');


const sendRequst = (data) => fetch('http://localhost:5000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((json) => {
    localStorage.setItem('token', json.token);
    return true;
  });

const handleSubmit = (route, values, { setSubmitting }) => {
  const data = values;
  route.push("/userPage");
  // sendRequst(data).then((isUserAuth) => {
  //   if (isUserAuth) {
  //     route.push("/userPage");
  //   }
  //   console.log(isUserAuth);
  // });
};

const LoginPage = (props) => (

      <AuthTemplate>
        <Formik initialValues={{ username: '', password: '' }} onSubmit={(formData, formMethods) => handleSubmit(props.history, formData, formMethods)}>
          {({ handleChange, values }) => (
            <Wrapper>
              <StyledHeading>Sign in</StyledHeading>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Login"
                  onChange={handleChange}
                  value={values.username}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <Button activecolor="primary" type="submit">
                  sign in
                </Button>
              </StyledForm>
              <StyledLink to="/register">I want my account!</StyledLink>
            </Wrapper>
          )}
        </Formik>
      </AuthTemplate>
);

export default withRouter(LoginPage);
