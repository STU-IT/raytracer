//import * as ref from "./references"
var Ray = (function () {
    function Ray(a, b) {
        if (a != null && b != null) {
            this.data = [];
            this.data[0] = a;
            this.data[1] = b;
        }
    }
    Ray.prototype.origin = function () {
        return (this.data[0]);
    };
    Ray.prototype.direction = function () {
        return (this.data[1]);
    };
    return Ray;
}());
//export {Ray}; 
//# sourceMappingURL=Ray.js.map