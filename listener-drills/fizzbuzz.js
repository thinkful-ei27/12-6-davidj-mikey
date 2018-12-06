function fizzbuzz(num) {
    if (num % 15 === 0) return 'fizzbuss';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizz';
    return num;
}

function makeFizzBuzzArray(n) {
    const arr = [];
    for (let i = 1; i <=n; i++) {
        arr.push(i);
    }
    return arr;
}

function fizzBuzzItemToHTML(item) {
    return `<div class="fizz-buzz-item">${item}</div>`;
}
function fizzBuzzArrayToHTML() {
    const html = arr.map(fizzBuzzItemToHTML)
    return html
}

function fizzbuzzHTMLToDOM() {
    const results = $('.js-results');
    results.html(html);

}
function main() {
    $('#number-chooser').submit(function(e) {
        e.preventDefault();

        const input = $('#number-choice');
        const number = input.val();

        const fizzBuzzArray = makeFizzBuzzArray(number);
        const html = fizzBuzzArrayToHTML(fizzBuzzArray);
        fizzBuzzHTMLToDOM(html);
    })
}
$(main);