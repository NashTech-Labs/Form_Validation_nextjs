import React, { useState, ChangeEvent } from "react";
import { Typography, Grid, Button, FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import classes from "./LoginForm.module.css";
import { isValidEmail, isValidPassword } from "@/Utility/Validations";

function LoginForm() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setEmail(value);
    setEmailError("");
  };

  const handlePasswordChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setPassword(value);
    setPasswordError("");
  };

  const checkEmailValidation = () => {
    if (!isValidEmail(userEmail)) {
      setEmailError("That looks like an invalid email");
    } else {
      setEmailError("");
    }
  };

  const checkPasswordStrength = () => {
    if (!isValidPassword(userPassword)) {
      setPasswordError(
        "Password must be 8 chars long with one letter, one number and one symbol"
      );
    } else {
      setPasswordError("");
    }
  };

  const loginUser = () => {
    checkEmailValidation();
    checkPasswordStrength();
    if (emailError || passwordError) {
      return;
    } else {
      alert("User Sucessfully logged In");
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes["form-container"]}
      >
        <Grid item lg={3} className={classes["form"]}>
          <Grid container alignItems="center">
            <Grid item lg={6}>
              <Typography variant="h5" className={classes["form-heading"]}>
                Sign In
              </Typography>
            </Grid>
            <Grid
              item
              lg={1}
              sx={{ cursor: "pointer", textAlign: "right" }}
            ></Grid>
          </Grid>
          <Typography
            variant="body2"
            sx={{ color: "#666B73", fontSize: "16px" }}
          >
            Email
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              sx={
                emailError
                  ? {
                      mt: 1,
                      "&": {
                        border: "1px solid #e1251b",
                        background: "#FEFAF9",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    }
                  : {
                      mt: 1,
                      mb: 3,
                      "&": {
                        border: "1px solid #333333",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    }
              }
              placeholder="eg. johndoe@mail.com"
              size="small"
              inputProps={{}}
              endAdornment={
                emailError ? (
                  <InputAdornment position="end">
                    <ErrorOutlineIcon sx={{ color: "red" }} />
                  </InputAdornment>
                ) : null
              }
              value={userEmail}
              onChange={handleEmailChange}
              onBlur={checkEmailValidation}
            />
          </FormControl>
          {emailError ? (
            <Typography
              variant="body2"
              mt={1}
              className={classes.error}
              data-testid="emailError"
            >
              {emailError}
            </Typography>
          ) : null}
          <Typography
            variant="body2"
            sx={{ color: "#666B73", fontSize: "16px", mt: 2 }}
          >
            Password
          </Typography>
          <FormControl fullWidth>
            <OutlinedInput
              sx={
                passwordError
                  ? {
                      mt: 1,
                      "&": {
                        border: "1px solid #e1251b",
                        background: "#FEFAF9",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    }
                  : {
                      mt: 1,
                      mb: 2,
                      "&": {
                        border: "1px solid #333333",
                        borderRadius: "4px",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    }
              }
              placeholder="eg. A@b123"
              size="small"
              type="Password"
              inputProps={{}}
              endAdornment={
                passwordError ? (
                  <InputAdornment position="end">
                    <ErrorOutlineIcon sx={{ color: "red" }} />
                  </InputAdornment>
                ) : null
              }
              value={userPassword}
              onChange={handlePasswordChange}
              onBlur={checkPasswordStrength}
            />
          </FormControl>
          {passwordError ? (
            <Typography
              variant="body2"
              mt={1}
              className={classes.error}
              data-testid="roleError"
            >
              {passwordError}
            </Typography>
          ) : null}
          <Grid container mt={5} justifyContent="center">
            <Grid item lg={3}>
              <Button
                className={classes["login-btn"]}
                variant="contained"
                onClick={loginUser}
                disabled={!Boolean(userEmail && userPassword)}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginForm;
