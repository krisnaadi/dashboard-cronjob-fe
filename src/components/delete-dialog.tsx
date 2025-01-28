import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function DeleteDialog({
  jobId,
  onDelete,
}: {
  jobId: string;
  onDelete: (jobId: string) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost"><Trash /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete this job?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" variant="destructive" onClick={() => onDelete(jobId)} >Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
