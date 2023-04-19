export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Ryan's portfolio";
    return;
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "I am Ryan Summerlin";
    return;
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    const aboutMe = "My name is Ryan Summerlin. I currently work as an auditor for EY but I am working on my coding skills in order to become a software engineer";
    document.body.children[1].children[0].innerText = aboutMe;
    return;
}
