import { States,Action} from "../../pages/projects/interfaces/reducer_interface"

export const CustumeState = (states:States, action:Action) => {
    const {type,loading,error} = action
    switch (type) {
        case 'LOADING':
            return {
                ...states, loading: true, error: false
            }
        case 'FETCHING':
            return {
                ...states, loading: false, error: false
            }
        case 'ERROR':
            return {
                ...states, loading: false, error: true
            }

        default: throw new Error()
    }

}