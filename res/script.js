/*
function getSelectionNode() {
    var node = document.getSelection().anchorNode;
    return (node.nodeType == 3 ? node.parentNode : node);
}


let body = document.getElementsByTagName("body")[0];


body.addEventListener("keydown", (event) => {
    let node;
    let style;
    
    if (event.ctrlKey) {
        if (event.key === "-") {
            node = getSelectionNode();
            style = getComputedStyle(node);
        }
    }
});
*/

window.onload = function() {
    let locale = document.body.parentElement.lang;  // <html lang="" >

    let aa = document.getElementsByTagName('a');
    for (let a of aa) {
        if (a.href !== "")
            continue;
        let c = a.innerText;
        if (c.includes('@'))
            c = 'mailto:' + c;
        else if (!c.includes('/'))
            c = 'tel:' + c;
        else if (!c.includes(':'))
            c = 'https://' + c;
        a.href = c;
    }

    let td = document.getElementById('today');
    let today = new Date().toLocaleDateString(locale, {
        day: "numeric", month: "long", year: "numeric",
    });
    td.textContent = today;
}
