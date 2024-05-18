import React from 'react';



export type AllDataType = {
    data1: Array<DataType>
    data2: Array<DataType>
}

export type DataType = {
    title: string
    student: Array<string>
    tasks: Array<TasksType>
}

export type TasksType = {
    taskId: number
    isDone: boolean
    title: string
}

export const Tasks:React.FC<AllDataType> = (props) => {
    return (
        <div>

        </div>
    );
};
