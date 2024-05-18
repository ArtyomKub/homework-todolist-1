export type DataType = {
    title: string
    students: Array<string>
    tasks: Array<TasksType>
}

export type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

export type TasksPropsType = {
    data: DataType
}
