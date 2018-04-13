import Rpc from './rpc';

class BaseModel extends Rpc {
    constructor(name){
        super();
        this.name = name;
    }

    call({method, args = [], kwargs = {}}){
        const url = `/web/dataset/call_kw/${this.name}/${method}`;
        return super.rpc(url, {model: this.name, method, args, kwargs});
    }

    call_button({method, args = []}) {
        return super.rpc('/web/dataset/call_button', {
            model: this.name,
            method,
            domain_id: null,
            //context_id: args.length - 1,
            args
        });
    }
}

export default BaseModel;