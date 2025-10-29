export abstract class BaseHandlerChain {
    private nextHandler: BaseHandlerChain | null = null;

    setNext(handler: BaseHandlerChain): BaseHandlerChain {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: any): any | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}