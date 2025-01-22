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

export default function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost"><Trash /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete this job?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" variant="outline">
            Cancel
          </Button>
          <Button type="submit" variant="destructive">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
