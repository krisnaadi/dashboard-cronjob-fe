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
import { useState } from "react";
import FormJob from "./form-edit";
import { Job } from "./types";

export default function EditDialog({
  job,
  onSuccess,
}: {
  job: Job;
  onSuccess: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = () => {
    setIsOpen(false);
    onSuccess();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogDescription>
            Make changes to your job here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormJob initialData={job} onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
