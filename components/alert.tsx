import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AlertProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function Alert({ onConfirm, onCancel }: AlertProps) {
  return (
    <Card className="w-[350px] fixed top-4 right-4">
      <CardHeader>
        <CardTitle>Delete Item</CardTitle>
        <CardDescription>Are you sure you want to delete this item?</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
