import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksType = {
    [key: string]: TaskType[]

}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id_List: string, id: string) {
        let filteredTasks = {...tasks, [id_List]: tasks[id_List].filter(el => el.id !== id)}
        setTasks(filteredTasks);
    }

    function addTask(id_List: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = {...tasks, [id_List]: [...tasks[id_List], task]};
        setTasks(newTasks);
    }

    function changeStatus(id_List: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [id_List]: tasks[id_List].map(el => el.id === taskId ? {...el, isDone: isDone} : el)});
    }

    function changeFilter(id_List: string, filter: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === id_List ? {...el, filter: filter} : el))
    }

    const filterTheTasks = (id_List: string, filter: FilterValuesType) => {
        let tasksForTodolist = tasks;
        if (filter === "active") tasksForTodolist = {...tasks,[id_List]: tasks[id_List].filter(el => !el.isDone)}
        if (filter === "completed") tasksForTodolist = {...tasks,[id_List]: tasks[id_List].filter(el => el.isDone)}
        return tasksForTodolist
    }
    return (
        <div className="App">
            {todolists.map(el => {
                filterTheTasks(el.id,el.filter)
                return (
                    <Todolist title={el.title}
                              tasks={filterTheTasks(el.id,el.filter)[el.id]}
                              removeTask={(id) => removeTask(el.id, id)}
                              changeFilter={(filter) => changeFilter(el.id, filter)}
                              addTask={(title) => addTask(el.id, title)}
                              changeTaskStatus={(id, isDone) => changeStatus(el.id, id, isDone)}
                              filter={el.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;
