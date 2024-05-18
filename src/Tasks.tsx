import React from 'react';
import {TasksPropsType} from './CommandType';


export const Tasks = (props: TasksPropsType) => {
    return (
        <div className="tasks">
            <div>{props.data.title}</div>
            <ul>
                {props.data.tasks.map((el) => {
                    return (
                        <li key={el.taskId}>
                            <ul>{el.title}</ul>
                            <ul>{el.isDone}</ul>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.data.students.map((st, index) => {
                    return (
                        <li key={index}>{st}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Tasks;




