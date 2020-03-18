class MyPromise {

    constructor(fn) {
      // 初始化内部状态
      this._result;
      this._successCallback = [];
      this._errorCallback = [];
      this._status = 'pending'
      try {
        fn(
          this.resolve.bind(this),
          this.reject.bind(this)
        )
      } catch(e) {
        this.reject(e);
      }
    }
  
    _runCallbackAsync(type) {
      let eventQueue;
      if(type === 'error') eventQueue = this._errorCallback;
      else eventQueue = this._successCallback;
      // 执行回调, 使用settimeout模拟异步执行
      setTimeout(() => {
          eventQueue.forEach(callback => callback(this._result));
          // 清空事件队列，两个事件队列都需要删除，因为promise决议后状态不可变更，决议执行完应当清空所有队列，以解除引用关系
          this._errorCallback.length = 0;
          this._successCallback.length = 0;
      }, 0)
    }
  
    // resolve调用之后改变后promise的状态，并且异步执行callback
    resolve(result) {
      // promise的状态不是pending,说明该promise已经调用过reject/resolve
      if(this._status !== 'pending') throw new Error('重复决议promise')
      this._result = result
      this._runCallbackAsync('success')
    }
  
    // reject也是同理
    reject(err) {
      if(this._status !== 'pending') throw new Error('重复决议promise')
      this._result = err
      this._runCallbackAsync('error')
    }
  
    then(fn1, fn2) {
      // 支持链式调用，立即回复一个新的promise对象
      return new Promise((resolve, reject) => {     
        // 接收决议结果
        const successCallBack = (result) => {
            try {
                // 将promise的决议结果传递给回调函数去执行，并把回调函数的结果作为下一个promise的决议结果
                resolve(fn1(result))
            } catch(e) {
                // 如果执行出错，应该将错误信息传递给promise
                reject(e)
            }
        }
        
        const errorCallback = (e) => {
            try {
                reject(fn2(e))
            } catch(err) {
                reject(err)
            }
        }
          
        // 将回调函数推入事件队列
        if (fn1 && this._status !== 'error') this._successCallback.push(successCallBack)
        if (fn2 && this._status !== 'success') this._errorCallback.push(errorCallback)
        
        // 如果promise已经决议，则立即执行相应的回调
        if(this._status === 'success') this._runCallbackAsync('success')
        if(this._status === 'error') this._runCallbackAsync('error')
      })
    }
  
    catch(fn) {
      return this.then(undefined, fn);
    }
  }

  fnn = (res, rej) => {
    if(aa) {
        res('test')
    } else {
        rej('err')
    }
  }
  a = (aa) => {
    return new MyPromise(fnn)
  }

  a().then((e) => {
      console.log(e)
  }, (e) => {
      console.log(e)
  })