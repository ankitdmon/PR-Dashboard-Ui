import { ChangeEvent } from "react";

export interface InputTagProps {
    type: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }