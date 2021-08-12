// import React, { useState } from "react";
// import Link from "next/link";
// import firebaseClient from "../firebaseClient";
// import firebase from "firebase/app";
// import "firebase/auth";
// import {
//   Box,
//   Flex,
//   Input,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   FormErrorMessage,
//   Stack,
//   Button,
//   Heading,
//   useToast,
// } from "@chakra-ui/core";

// export default function Login({ props }) {
//   firebaseClient();
//   const toast = useToast();
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   return (
//     <Flex>
//       <Box w={500} p={4} my={12} mx="auto">
//         <Heading textAlign="center" as="h2">
//           Login
//         </Heading>
//         <FormControl isRequired>
//           <FormLabel htmlFor="email">Email address</FormLabel>
//           <Input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="emailAddress"
//             value={email}
//             aria-describedby="email-helper-text"
//           />
//           <FormHelperText id="email-helper-text">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel htmlFor="password">Password</FormLabel>
//           <Input
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             id="pass"
//             value={pass}
//             aria-describedby="password-helper-text"
//           />
//         </FormControl>
//         <Stack justify="center" mt={6} isInline spacing={10}>
//           <Button
//             minWidth="40%"
//             variant="solid"
//             variantColor="blue"
//             isDisabled={email === "" || pass === ""}
//             onClick={async () => {
//               await firebase
//                 .auth()
//                 .createUserWithEmailAndPassword(email, pass)
//                 .then(function (firebaseUser) {
//                   window.location.href = "/";
//                 })
//                 .catch(function (error) {
//                   const message = error.message;
//                   toast({
//                     title: "An error occurred.",
//                     description: message,
//                     status: "error",
//                     duration: 9000,
//                     isClosable: true,
//                   });
//                 });
//             }}
//           >
//             Create account
//           </Button>
//           <Button
//             minWidth="40%"
//             variant="solid"
//             variantColor="green"
//             isDisabled={email === "" || pass === ""}
//             onClick={async () => {
//               await firebase
//                 .auth()
//                 .signInWithEmailAndPassword(email, pass)
//                 .then(function (firebaseUser) {
//                   window.location.href = "/";
//                 })
//                 .catch(function (error) {
//                   const message = error.message;
//                   toast({
//                     title: "An error occurred.",
//                     description: message,
//                     status: "error",
//                     duration: 9000,
//                     isClosable: true,
//                   });
//                 });
//             }}
//           >
//             Log in
//           </Button>
//         </Stack>
//       </Box>
//     </Flex>
//   );
// }


// import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import AuthSocial from '../components/authentication/AuthSocial';
import ThemeConfig from '../components/theme';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <ThemeConfig>
        <RootStyle title="Login">
        <AuthLayout>
            FIX THIS LATER &nbsp;
            {/* <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
            Get started
            </Link> */}
        </AuthLayout>

        {/* <MHidden width="mdDown">
            <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                Hi, Welcome Back
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
            </SectionStyle>
        </MHidden> */}

        <Container maxWidth="sm">
            <ContentStyle>
            <Stack sx={{ mb: 5 }}>
                <Typography variant="h4" gutterBottom>
                Sign in to App_Name
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
            </Stack>
            <AuthSocial />

            <LoginForm />

            <MHidden width="smUp">
                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                {/* <Link variant="subtitle2" component={RouterLink} to="register">
                    Get started
                </Link> */}
                </Typography>
            </MHidden>
            </ContentStyle>
        </Container>
        </RootStyle>
    </ThemeConfig>
  );
}
