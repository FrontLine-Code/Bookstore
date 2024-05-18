import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as Style from "./style";
import { GradientTitle } from "../../utils/globalStyles";
import { colors } from "../../utils/variables";

interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Sigin: React.FC = () => {
  const classes = Style.useStyles();
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [formState, setFormState] = useState<FormState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors: Partial<FormState> = {};
    Object.keys(formState).forEach((key) => {
      if (!formState[key as keyof FormState]) {
        formErrors[key as keyof FormState] = `${key} is required`;
      }
    });
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formState);
    }
  };

  return (
    <Style.FormWrapper>
      <GradientTitle variant="h4">Sig In</GradientTitle>
      <Style.FormContent onSubmit={handleSubmit}>
        <Style.InputWrapper>
          <Style.FormInput
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formState.firstname}
            onChange={handleChange}
            className={classes.root}
          />
          {errors.firstname && (
            <span style={{ color: "red" }}>{errors.firstname}</span>
          )}
        </Style.InputWrapper>
        <Style.InputWrapper>
          <Style.FormInput
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formState.lastname}
            onChange={handleChange}
            className={classes.root}
          />
          {errors.lastname && (
            <span style={{ color: "red" }}>{errors.lastname}</span>
          )}
        </Style.InputWrapper>
        <Style.InputWrapper>
          <Style.FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            className={classes.root}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </Style.InputWrapper>
        <Style.InputWrapper>
          <Style.FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
            className={classes.root}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </Style.InputWrapper>
        <Button type="submit" sx={Style.submitBtnStyle}>
          Submit
        </Button>
        <Link to="/login" style={{ color: `${colors.darkGreen}` }}>
          Do you have account ?
        </Link>
      </Style.FormContent>
    </Style.FormWrapper>
  );
};

export default Sigin;
