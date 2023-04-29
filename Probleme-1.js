function isValidHtml(html) {
    const stack = []; // Pile pour stocker les balises ouvrantes
    const pattern = /<\s*\/?\s*(\w+)\s*.*?>/g; // Expression régulière pour trouver les balises

    // Parcourir toutes les balises dans l'ordre où elles apparaissent dans la chaîne HTML
    let match;
    while ((match = pattern.exec(html)) !== null) {
        const tag = match[1];
        const isClosingTag = tag.charAt(0) === '/';
        if (isClosingTag) {
            // Vérifier que la balise fermante correspond à la dernière balise ouvrante de la pile
            const lastOpeningTag = stack.pop();
            if (!lastOpeningTag || lastOpeningTag !== tag.slice(1)) {
                return false;
            }
        } else {
            console.log(isClosingTag);
            // Ajouter la balise ouvrante à la pile
            stack.push(tag);
        }
    }

    // Vérifier que toutes les balises ouvrantes ont une balise fermante correspondante
    return stack.length === 0;
}

console.log(isValidHtml("<p></p>"))