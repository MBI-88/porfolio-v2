import { StackData } from '../interfaces/stack_interface';
import stack from '../data/stack.json'

export function FetchStackData(data:StackData[]) {
    const result = data.map(item => item)
    return result
}