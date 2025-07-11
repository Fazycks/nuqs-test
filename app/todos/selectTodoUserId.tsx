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

export function SelectTodoUserId() {
    const [userId, setUserId] = useQueryState("userId", {
        shallow: false,
    });

    return (
        <Select
            value={userId || "all"}
            onValueChange={(newState) => setUserId(newState)}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select userId" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="all">All userId</SelectItem>
                    {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i + 1} value={`${i + 1}`}>
                            User {i + 1}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
