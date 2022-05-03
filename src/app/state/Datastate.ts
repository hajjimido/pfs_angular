export enum StateEnum{
    loading,
    loaded,
    Eroor

}


export interface Datastate<T>{
    datastate?:StateEnum,
    data?:T,
    errormessage?:string
}