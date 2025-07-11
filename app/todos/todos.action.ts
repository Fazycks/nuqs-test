"use server";

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export type TodoFilters = {
    userId?: number;
    completed?: boolean;
};

export const fetchTodos = async (filters?: TodoFilters) => {
    let url = "https://jsonplaceholder.typicode.com/todos";

    if (filters) {
        const searchParams = new URLSearchParams();

        if (filters.completed !== undefined) {
            searchParams.append("completed", filters.completed.toString());
        }

        if (filters.userId !== undefined) {
            searchParams.append("userId", filters.userId.toString());
        }

        const queryString = searchParams.toString();
        if (queryString) {
            url += `?${queryString}`;
        }
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }

    return response.json() as Promise<Todo[]>;
};

export const fetchTodoById = async (id: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch todo with id ${id}`);
    }

    return response.json() as Promise<Todo>;
};
