//promises in js    
class rectangle {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
    setWidth(width) {
        return new Promise((resolve, reject) => {
            if (width > 0) {
                this.width = width;
                resolve(this.width);
            } else {
                reject("Width must be greater than 0");
            }
        });
    }
    setHeight(height) {
        return new Promise((resolve, reject) => {
            if (height > 0) {
                this.height = height;
                resolve(this.height);
            } else {
                reject("Height must be greater than 0");
            }
        });
    }
};