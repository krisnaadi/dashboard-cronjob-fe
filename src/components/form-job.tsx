import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Switch } from "./ui/switch";
import { Job } from "./types";
import { useState } from "react";

const formSchema = z.object({
  id: z.string().optional(), // Optional ID for update operations
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  schedule: z.string().min(5, {
    message: "Schedule must be at least 5 characters.",
  }),
  task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
  status: z.boolean(),
});

export default function FormJob({
  initialData,
  onSuccess,
}: {
  initialData?: Job;
  onSuccess?: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id,
      name: initialData?.name || "",
      schedule: initialData?.schedule || "",
      task: initialData?.task || "",
      status: initialData?.status || true,
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      };
      if (values.id) {
        await axios.put(`http://localhost:8080/api/v1/jobs/${values.id}`, values, config);
        console.log("Updated successfully", values);
      } else {
        await axios.post("http://localhost:8080/api/v1/jobs", values, config);
        console.log("Inserted successfully", values);
      }
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error saving data", error);
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schedule"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Schedule</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-3">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            Save {loading && "..."}
          </Button>
        </div>
      </form>
    </Form>
  );
}
