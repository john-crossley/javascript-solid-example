// Every single class gets this function
Object.prototype.mixin = function(module) {
    for (method in module.prototype) {
        if (module.prototype.hasOwnProperty(method)){
            this.prototype[method] = module.prototype[method]
        }
    }
};

var Tags = function() {};
Tags.prototype.listTags = function() {
    this._tags = this._tags || [];
    return this._tags;
};

Tags.prototype.addTag = function(tag) {
    this._tags = this._tags || [];
    this._tags.push(tag);
    this.publish && this.publish("tagAdded");
};

Tags.prototype.removeTag = function(tag) {
    this._tags = this._tags || [];
    this._tags.splice(this._tags.indexOf(tag), 1);
};

Tags.prototype.countTags = function() {
    this._tags = this._tags || [];
    return this._tags.length;
};