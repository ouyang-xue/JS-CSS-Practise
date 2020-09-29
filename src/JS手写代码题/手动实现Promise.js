/*
const promise = new Promise(function (resolve, reject) {
    if (满足条件) {
        resolve();
    } else {
        reject();
    }
}).then(onfulfilled => {}, onrejected => {});
*/

// 定义状态常量
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class CustomizedPromise {
    constructor(excutor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = value => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.map(fn => fn(this.value));
            }
        };
        let reject = reason => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.map(fn => fn());
            }
        };
        // 自动执行函数
        try {
            excutor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled, onRejected) {
        // 判断promise的状态
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        } else if (this.status === REJECTED) {
            onRejected(this.reason);
        } else { // 即状态为pending时
            // 将onFulfilled和onRejected分别加入onResolvedCallbacks和onRejectedCallbacks数组中
            // 等待resolve或reject函数执行时调用
            this.onResolvedCallbacks.push(() => {
                // do something
                onFulfilled(this.value);
            });

            this.onRejectedCallbacks.push(() => {
                // do something
                onRejected(this.reason);
            })
        }
    }
}

new CustomizedPromise((reso, reject)=>{
    setTimeout(()=>{
        reso('hello')
    },1000)
}).then((data)=>{
    console.log('success:', data); // success: hello
});
