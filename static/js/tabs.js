const headers = document.querySelectorAll(".code-tabs > .tab-list > span");

headers.forEach((header) => {
    header.addEventListener("click", (e) => {
        const os = header.getAttribute("data-os");
        // console.log(os);

        document
            .querySelectorAll(".code-tabs > .tab-list > span.active")
            .forEach((item) => item.classList.remove("active"));
        document
            .querySelectorAll(`.code-tabs > .tab-list > span[data-os=${os}]`)
            .forEach((item) => item.classList.add("active"));

        const allTabs = document.querySelectorAll(".tab-content");
        // console.log(allTabs);
        allTabs.forEach((content) => content.classList.add("hidden"));

        const targetTag = document.querySelectorAll(`.tab-content.${os}`);
        // console.log(targetTag);
        targetTag.forEach((content) => content.classList.remove("hidden"));
    });
});
