import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { Button, TextField } from "@mui/material";

export const Login = () => {
  const methods = useForm({ mode: "onBlur" });
  const { logIn } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      console.log(data)
      router.push("/main");
    } catch (error) {
      console.log(error)
      setError(true)
    }
  };
  return (
    <div
      style={{
        width: "100%",
        "text-align": "center",
      }}
    >
      <h1>Iniciar sesión</h1>
      <FormProvider {...methods}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              id="standard-required"
              label="usuario"
              placeholder="Usuario"
              variant="standard"
              type="email"
              InputLabelProps={{
                style: { color: "black" },
              }}
              style={{ width: 300 }}
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div>
            <TextField
              id="standard-required"
              label="contraseña"
              placeholder="Contraseña"
              variant="standard"
              type="password"
              InputLabelProps={{
                style: { color: "black" },
              }}
              style={{ width: 300 }}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p style={{ "color": 'red' }}>La contraseña es obligatoria</p>
            )}
          </div>
          <div>
            { error && <p style={{"color": 'red'}}>Contraseña invalida</p>}
          </div>
          <div>
            <Button
              variant="contained"
              color="success"
              style={{ margin: "10px 40px" }}
              type="submit"
            >
              Iniciar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
