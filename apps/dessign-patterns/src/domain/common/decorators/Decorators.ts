export interface Decorators<T>{
    execute(data?: T): T;
}