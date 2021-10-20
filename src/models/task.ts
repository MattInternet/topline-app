import { v4 as uuidv4 } from 'uuid';

export default class Task {
    id = uuidv4();
    completed: boolean;
    content: string;

    constructor(content: string){
        this.completed = false;
        this.content = content;
    }
}