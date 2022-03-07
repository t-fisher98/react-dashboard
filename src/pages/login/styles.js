import styled from 'styled-components';

const LoginFormStyles = styled.section`
  max-width: 420px;
  margin: 5rem auto 0;
  h2 {
    text-align: center;
    font-size: 2.2rem;
  }
  .Toastify__toast {
    background-color: red;
    color: white;
  }
  .Toastify__progress-bar--error {
    background-color: blue;
  }
`;

const FormControl = styled.div`
  margin: 1.25rem;
`;

export { LoginFormStyles, FormControl }