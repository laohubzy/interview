function Promi(executor) {
    let _this = this;
    _this.$$status = 'pending';
    _this.failCallBack = undefined;
    _this.successCallback = undefined;
    _this.result = undefined;
    _this.error = undefined;
    // setTimeout(_ => {
    //     executor(_this.resolve.bind(_this), _this.reject.bind(_this));
    // })
    executor(_this.resolve.bind(_this), _this.reject.bind(_this));
}

Promi.prototype.then = function(full, fail) {
    let newPromi = new Promi(_ => {});
    this.successCallback = full;
    this.failCallBack = fail;
    this.successDefer = newPromi.resolve.bind(newPromi);
    this.failDefer = newPromi.reject.bind(newPromi);
    return newPromi
};

Promi.prototype.resolve = function(params) {
    let _this = this;
    if (_this.$$status === 'pending') {
        _this.$$status = 'success';
        if (!_this.successCallback) return;
        let result = _this.successCallback(params);
        if (result && result instanceof Promi) {
            result.then(_this.successDefer, _this.failDefer);
            return ''
        }
        _this.successDefer(result)
    }
}

Promi.prototype.reject = function(params) {
    let _this = this;
    if (_this.$$status === 'pending') {
        _this.$$status = 'fail';
        if (!_this.failCallBack) return;
        let result = _this.failCallBack(params);
        if (result && result instanceof Promi) {
            result.then(_this.successDefer, _this.failDefer);
            return ''
        }
        _this.successDefer(result)
    }
}

// 测试代码
new Promi(function(res, rej) {
    setTimeout(_ => res('成功'), 500)
}).then(res => {
    console.log(res);
    return '第一个.then成功'
}).then(res => {
    console.log(res);
    return new Promi(function(resolve) {
        setTimeout(_ => resolve('第二个.then成功'), 500)
    })
}).then(res => {
    console.log(res)
    return new Promi(function(resolve, reject) {
        setTimeout(_ => reject('第三个失败'), 1000)
    })
}).then(res => {res
    console.log(res)
}, rej => console.log(rej));