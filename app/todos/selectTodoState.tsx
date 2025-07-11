"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";

export function SelectTodoState() {
    const [state, setState] = useQueryState("state", {
        shallow: false,
    });

    return (
        <Select
            value={state || "all"}
            onValueChange={(newState) => setState(newState)}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="all">All state</SelectItem>
                    <SelectItem value="true">Completed</SelectItem>
                    <SelectItem value="false">Not completed</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
