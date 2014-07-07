Tasks.TaskController = Ember.ObjectController.extend({
    isDone: function(key, value){
        var model = this.get("model");
        
        if (value === undefined){
            //getter
            return model.get("isDone");
        } else {
            //setter
            model.set("isDone", value);
            model.save();
            return value;
        }
    }.property("model.isCompleted"),
    
    actions:{
        editTask: function(){
            this.set("isEditing", true);
        },
        acceptChanges: function(){
            this.set("isEditing", false);
            if(Ember.isEmpty(this.get("model.title"))){
                this.send("removeTask");
            } else {
                this.get("model").save();
            }
        },
        removeTask: function(){
            var task = this.get("model");
            task.deleteRecord();
            task.save();
        }
    },
    isEditing: false
});