
export enum ActionType {
    Loading = "LOADING",
    Fetching = "FETCHING",
    Error = "ERROR"
}


export interface Action {
    type: ActionType,
    loading: boolean,
    error: boolean,

}

export interface States {
    loading:boolean,
    error:boolean,
}