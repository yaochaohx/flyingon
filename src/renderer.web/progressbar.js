flyingon.renderer('ProgressBar', function (base) {


    this.render = function (writer, control, render) {

        var value = (control.__storage || control.__defaults).value;

        writer.push('<div');
        
        render.call(this, writer, control);

        writer.push('>',
                '<div class="f-progressbar-back" style="width:', value, '%;"></div>',
                '<div class="f-progressbar-text"><span>', value, '%</span></div>',
            '</div>');
    };


    this.value = function (control, view, value) {

        view.firstChild.style.width = view.lastChild.firstChild[this.__text_name] = value + '%';
    };


});