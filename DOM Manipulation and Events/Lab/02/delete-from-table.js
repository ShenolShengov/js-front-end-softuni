function deleteByEmail() {
    const emailsEl = document.querySelectorAll(
        "#customers tbody tr td:nth-child(2)"
    );
    const emailForDeleteInput = document.querySelector('input[name="email"]');
    const emailForDelete = emailForDeleteInput.value;
    const resultEl = document.querySelector("#result");

    const forDelete = [...emailsEl].find(
        (e) => {
            console.log(e.textContent);
            return e.textContent == emailForDelete;
        }
    );
    emailForDeleteInput.value = '';

    if (forDelete) {
        forDelete.parentElement.remove();
        resultEl.textContent = "Deleted.";
    } else {
        resultEl.textContent = "Not found.";
    }
}
