var app = {
    template: `
        <div>入口组件</div>
    `
};


export var num1 = 16;

const num2 = 3;
export {num2};

export function add(x, y) {
    return x + y;
}

export default app;

