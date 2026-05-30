import {
  EyeIcon,
  GoogleLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { BrandLogo } from "@/features/brand-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import { object, string } from "yup";

// yup validation

const yupInstance = object({
  username: string().min(4).max(28).trim().required("Username is required"),
  email: string()
    .email("Email is not valid")
    .trim()
    .required("Email is required"),
  password: string()
    .min(8, "Password must have at least 8 characters")
    .trim()
    .required("Password is required"),
});

function RegisterForm({ className, brandName = "Aivox", ...props }) {
  return (
    <form
      data-slot="login-form"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <BrandLogo name={brandName} showName={false} />
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-3xl font-bold">
            New here to <span className="text-primary">{brandName}</span>
          </h1>
          <p className="text-balance text-sm text-muted-foreground">
            Register with your email and password, or you can login to your
            account if you already have one.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username" className="text-sm font-medium">
            Username
          </Label>
          <Input
            id="username"
            name="username"
            type="username"
            autoComplete="username"
            placeholder="Enter your username"
            className="h-11 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="h-11 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="h-11 rounded-lg pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Toggle password visibility"
              className="absolute inset-y-0 right-1 my-auto rounded-md text-muted-foreground"
            >
              <EyeIcon />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label
            htmlFor="remember"
            className="text-sm font-normal text-muted-foreground"
          >
            <Checkbox id="remember" name="remember" />
            Keep me sign-in to {brandName}
          </Label>
          <a
            href="#"
            className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-11 rounded-lg bg-primary text-sm text-white hover:bg-primary/80"
      >
        Register now
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
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="font-semibold text-foreground underline underline-offset-4"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export { RegisterForm };
