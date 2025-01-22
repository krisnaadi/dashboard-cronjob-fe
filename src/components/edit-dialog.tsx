import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";
import FormJob from "./form-job";

export default function EditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost"><Edit /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogDescription>
            Make changes to your job here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormJob />
        </div>
      </DialogContent>
    </Dialog>
  );
}
