var TimedTask = function(options) {

    var options = options || {},
        task = new Task(options);

    task.startingDate = options.startingDate ||
        new Date().getTime();

    return task;
};