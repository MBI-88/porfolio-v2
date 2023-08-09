import { StackData } from '../interfaces/stack_interface';

export function FetchStackData(data: StackData[]) {
    const result = data.map(item => item)
    return result
}