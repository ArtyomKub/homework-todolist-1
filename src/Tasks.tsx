import React from 'react';
import {TasksPropsType} from './CommandType';



export const Tasks: React.FC<TasksPropsType> = (props) => {
    return (
        <div className="tasks">
            <div>{props.data.title}</div>
            <ul>
                {props.data.tasks.map((el) => {
                    return (
                        <li key={el.taskId}>
                            <input type="checkbox" defaultChecked={el.isDone}/>
                            <span>{el.title}</span>
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




