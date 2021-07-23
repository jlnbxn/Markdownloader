import { useEffect, useState } from 'react'

function UseToc(navRef) {
    const [toc, setToc] = useState();
    const [active, setActive] = useState();

    const outerHeight = (el) => {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }

    useEffect(() => {
        const headings = document
            .getElementById("content")
            .querySelectorAll("h1, h2, h3");
        let tableOfContents = [];
        const navHeight = outerHeight(navRef.current);

        let callback = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                setActive(entry.target.id);
            });
        };



        let options = {
            root: null,
            rootMargin: navHeight + "px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(callback, options);

        for (let heading of headings) {
            let hash = heading.id;
            let title = heading.innerText;
            let tagName = heading.tagName;
            console.log({ heading });
            let obj = { title, hash, tagName };
            tableOfContents.push(obj);

            observer.observe(heading);
        }

        setToc(tableOfContents);

        window.addEventListener(
            "hashchange",
            function (e) {
                e.preventDefault();

                const target = document.getElementById(
                    window.location.hash.substring(1)
                );
                console.log({ target });
                window.scrollTo(0, target.offsetTop - navHeight);
            },
            false
        );
    }, [navRef]);


    useEffect(() => {
        const activeLink = document.querySelector(`a[href='#${active}']`);
        if (!activeLink) return;
        const parent = activeLink.closest("div");
        parent.scrollTop =
            activeLink.offsetTop - parseInt(getComputedStyle(parent).paddingTop);
    }, [active]);

    return [toc, active]
}

export default UseToc
