export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    function checkId(array) {
        for (let i = 0; i < array.length; i++) {
            let el = array[i];
            if (el.id === id) {
                return el;
            }

            if (el.children) {
                if (checkId(el.children)) {
                    return checkId(el.children);
                }
             }
        }

        return false;
    }

    return checkId(document.body.children);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    function findFirstTag(array) {
        for (let i = 0; i < array.length; i++) {
            let el = array[i];
            if (el.tagName === tag) {
                return el;
            }

            if (el.children) {
                if (findFirstTag(el.children)) {
                    return findFirstTag(el.children);
                }
            }
        }

        return false;
    }

    return findFirstTag(document.body.children);
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    function findFirstClass(array) {
        for (let i = 0; i < array.length; i++) {
            let el = array[i];
            if (el.className === cls) {
                return el;
            }

            if (el.children) {
                if (findFirstClass(el.children)) {
                    return findFirstClass(el.children);
                }
            }
        }

        return false;
    }

    return findFirstClass(document.body.children);
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    let tagElements = [];
    function findTagElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (el.tagName === tag) {
                tagElements.push(el);
            }

            if (el.children) {
                findTagElements(el.children);
            }
        }

        return;
    }

    findTagElements(document.body.children);
    return tagElements;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    let classElements = [];
    function findClassElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (el.className === cls) {
                classElements.push(el);
            }

            if (el.children) {
                findClassElements(el.children);
            }
        }

        return;
    }

    findClassElements(document.body.children);
    return classElements;
}
