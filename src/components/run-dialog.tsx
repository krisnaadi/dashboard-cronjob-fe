import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export default function RunDialog({
  jobId,
  onRun,
}: {
  jobId: string;
  onRun: (jobId: string) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost"><Play /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to run this task?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={() => onRun(jobId)}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
