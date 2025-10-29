export interface HandlerChain {
    setNext(handler: HandlerChain): HandlerChain;
    handle(request: any): any;
}