function insert(num) {
    document.form.textView.value=document.form.textView.value+num
}

function equal() {
    var expect = document.form.textView.value;
    if(expect) {
        document.form.textView.value = eval(expect)
    }
}

function clean() {
    document.form.textView.value="";
}

function back() {
    var expect = document.form.textView.value;
    document.form.textView.value = expect.substring(0,expect.length-1);
}