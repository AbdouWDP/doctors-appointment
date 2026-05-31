import {
  EyeIcon,
  GoogleLogoIcon,
  FacebookLogoIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { BrandLogo } from "@/features/brand-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import { object, string } from "yup";
import {
  FieldSet,
  FieldGroup,
  FieldLabel,
  Field,
  FieldError,
} from "@/components/ui/field";
import { useState } from "react";

// yup validation

const loginSchema = object({
  email: string()
    .email("Email is not valid")
    .trim()
    .required("Email is required"),
  password: string()
    .min(8, "Password must have at least 8 characters")
    .trim()
    .required("Password is required"),
});

const initErrors = {
  email: null,
  password: null,
};

function LoginForm({ className, brandName = "Aivox", ...props }) {
  const [errors, setErrors] = useState(initErrors);
  const [passwordType, setPasswordType] = useState("password");

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const validation = await loginSchema.validate(data, {
        abortEarly: false,
      });

      console.log(validation);

      setErrors(initErrors);
    } catch (err) {
      const { inner } = err;

      let schemaErrors = {};

      for (let error of inner) {
        schemaErrors = {
          ...initErrors,
          ...schemaErrors,
          [error.path]: error.message,
        };
      }

      setErrors(schemaErrors);
    }
  };

  return (
    <form
      data-slot="login-form"
      className={cn("flex flex-col gap-6", className)}
      onSubmit={submitHandler}
      {...props}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <BrandLogo name={brandName} showName={false} />
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-3xl font-bold">
            Welcome back to <span className="text-primary">{brandName}</span>
          </h1>
          <p className="text-balance text-sm text-muted-foreground">
            Login with your email and password you have been created before, or
            you can create account if you don&apos;t have a {brandName} account
          </p>
        </div>
      </div>

      <FieldSet>
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel htmlFor="email" className="text-sm font-medium">
              Email
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              aria-invalid={errors.email !== null}
            />
            <FieldError>{errors.email}</FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="password" className="text-sm font-medium">
              Password
            </FieldLabel>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={passwordType}
                placeholder="Enter your password"
                aria-invalid={errors.password !== null}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Toggle password visibility"
                className="absolute inset-y-0 right-1 my-auto rounded-md text-muted-foreground"
                onClick={() =>
                  passwordType === "password"
                    ? setPasswordType("text")
                    : setPasswordType("password")
                }
              >
                {passwordType === "password" ? <EyeIcon /> : <EyeSlashIcon />}
              </Button>
            </div>
            <FieldError>{errors.password}</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>

      <Button
        type="submit"
        size="lg"
        className="h-11 rounded-lg bg-primary text-sm text-white hover:bg-primary/80"
      >
        Login now
      </Button>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Separator className="flex-1" />
        <span className="shrink-0">Or Continue with</span>
        <Separator className="flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-11 rounded-lg text-sm"
        >
          <GoogleLogoIcon weight="bold" />
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-11 rounded-lg text-sm"
        >
          <FacebookLogoIcon weight="fill" className="text-blue-600" />
          Facebook
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          to="/auth/register"
          className="font-semibold text-foreground underline underline-offset-4"
        >
          Create account
        </Link>
      </p>
    </form>
  );
}

export { LoginForm };
