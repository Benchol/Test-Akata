/**
 * 
 * @param {string} html 
 * @returns {boolean}
 */

const isValidHtml = (html) => {
    const stack = [];
    const pattern = /<\s*\s*(\/?\w+)\s*.*?>/g;

    let match;
    while ((match = pattern.exec(html)) !== null) {
        const tag = match[1];
        const isClosingTag = tag.charAt(0) === '/';
        if (isClosingTag) {
            const lastOpeningTag = stack.pop();
            if (!lastOpeningTag || lastOpeningTag !== tag.slice(1)) {
                return false;
            }
        } else {
            stack.push(tag);
        }
    }
    return stack.length === 0;
}

console.log(isValidHtml("<p><b>test</b></p>"))