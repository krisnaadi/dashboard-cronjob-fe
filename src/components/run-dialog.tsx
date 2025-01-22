import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export default function RunDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost"><Play /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to run this task?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" variant="destructive">Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
