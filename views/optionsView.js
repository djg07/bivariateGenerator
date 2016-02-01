/**
 * Created by Daniel on 4/15/2015.
 */

var app = app || {};

app.optionsView = Backbone.View.extend({
    el: "#optionsContainer",
    template: _.template($("#optionsTemplate").html()),
    initialize: function(options) {
        console.log(options);
        this.render();
        //this.model.on("change", this.render, this)
        //this.model.on("change", this.render, this)
        this.listenTo(this.model, 'change', this.render);

    },

    events: {
        "change input.gridOption": "contentChanged",
        "change select#gridSize":   "gridChange"
    },

    contentChanged: function(e) {
        this.model.changeValue(e);
    },

    gridChange: function(e) {
        $('#gridSize').val();
        this.model.set("size", $('#gridSize').val());
        //alert(this.model.get("size"));
    },

    render: function() {
        //console.log(this.model.toJSON());

        this.$el.html(this.template(this.model.toJSON()));
        //this.model.set("topLeftOption", "#000099");
        //this.model.set("topRightOption", "#000000");
        //this.model.set("bottomLeftOption", "#FFFF99");
        //this.model.set("bottomRightOption", "#FF0000");

        $('#topLeftPreview').css("background-color", this.model.get('topLeftOption'));
        $('#topRightPreview').css("background-color", this.model.get('topRightOption'));
        $('#bottomLeftPreview').css("background-color", this.model.get('bottomLeftOption'));
        $('#bottomRightPreview').css("background-color", this.model.get('bottomRightOption'));



        $('#topLeftOption').val(this.model.get('topLeftOption'));
        $('#topRightOption').val(this.model.get('topRightOption'));
        $('#bottomLeftOption').val(this.model.get('bottomLeftOption'));
        $('#bottomRightOption').val(this.model.get('bottomRightOption'));
        //debugger;
        var gridSize = this.model.get('size');

        if (gridSize.length < 1) {
            $('#gridSize').val(3);
            this.model.set('size', 3);
        } else {
            $('#gridSize').val(this.model.get('size'));
        }


        $('#generateGrid').click(function() {
            //debugger;
            var x = bvm.generateGridArray(optionsM)

            bvm.fillArray(x);

        });

        $('#clearGrid').click(function() {
            $('#placeholder').empty();
        })



    }



})
