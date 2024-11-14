function editElement(element, matcher, replacer) {
    element.textContent = element.textContent.replaceAll(matcher, replacer);
}