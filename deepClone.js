
function clone(oldObject) {
    // 利用typeof判断是否是object
    const getType = (obj) => {
        const typeString = Object.prototype.toString.call(obj);
        return typeString.slice(8, typeString.length -1).toLocaleLowerCase();
    }

    const getRegExp = re => {
        var flags = "";
        if (re.global) flags += "g";
        if (re.ignoreCase) flags += "i";
        if (re.multiline) flags += "m";
        return flags;
    };

    const handleMap = {
        objectHandle(parent, callback) {
            return callback(parent);
        },
        arrayHandle(parent) {
            return [].concat(parent);
        },
        dateHandle() {
            return new Data(parent.getTime());
        },
        functionHandle(parent) {
            const proto = Object.getPrototypeOf(parent);
            // 利用Object.create切断原型链
            return Object.create(proto);
        },
        regexpHandle(parent) {
            return RegExp(parent.source, getRegExp(parent));
        }
    }

    var _clone = (parent) => {
        if(parent == null) return null; 
        let child = {};
        for(key in parent) {
            const type = getType(parent[key]);
            if(typeof parent[key] != 'object') {
                child[key] = parent[key]
            } else {
                child[key] = handleMap[`${type}Handle`](parent[key], _clone);
            }
        }
        return child;
    }

    return _clone(oldObject);
}

function say() {
    console.log('hello');
}
const obj = {
    a: 1,
    b: 2,
    c: say,
    d: new RegExp(/a/g),
    e: [1, 3, 4],
    f: {
        fa: 1,
        fb: {
            ffa: say
        }
    }
}

console.log(clone(obj));
console.log(JSON.parse(JSON.stringify(obj)))