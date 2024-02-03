export const generateUrl = (determinant: "todolist" | "task" | "auth", todolistId?: string, taskId?: string) => {
    if (determinant === "task") {
        return `/todo-lists/${todolistId}/tasks${taskId ? `/${taskId}` : ""}`
    }
    if (determinant === "todolist") {
        return `/todo-lists${todolistId ? `/${todolistId}` : ""}`
    }
}
