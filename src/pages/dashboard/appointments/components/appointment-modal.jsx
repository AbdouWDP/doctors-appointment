import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FieldSet, FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import { DOCTORS } from "@/pages/dashboard/data";

export default function AppointmentModal({
  type = "create",
  trigger,
  className,
  appointment = {},
  ...props
}) {
  const { patient } = appointment;

  console.log(patient);

  return (
    <AlertDialog className={cn("p-10", className)} {...props}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="patient">Patient Name</FieldLabel>
              <Input
                type="text"
                id="patient"
                name="patient"
                placeholder="Enter patient name"
                className="h-9"
                defaultValue={type === "update" ? patient : ""}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="doctor">Doctor</FieldLabel>
              <Select id="doctor">
                <SelectTrigger>
                  <SelectValue placeholder="Select your doctor" />
                </SelectTrigger>
                <SelectContent posotion="popper">
                  <SelectGroup>
                    {DOCTORS.map((doctor) => (
                      <SelectItem value={doctor.id}>{doctor.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </FieldSet>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
