function callbackFunc(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById(entry.target.id).classList.add(entry.target.id + "-animate");
        } else {
            document.getElementById(entry.target.id).classList.remove(entry.target.id + "-animate");
        }
    });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let observer = new IntersectionObserver(callbackFunc, options);

if (document.getElementById('casestudy_1') !== null) {
    observer.observe(document.getElementById('bondumi-phone_1'));
    observer.observe(document.getElementById('bondumi-phone_2'));
    observer.observe(document.getElementById('bondumi-icon'));
    observer.observe(document.getElementById('cykel-computer'));
    observer.observe(document.getElementById('cykel-chart'));
    observer.observe(document.getElementById('bayzat-computer'));
    observer.observe(document.getElementById('bayzat-app_1'));
    observer.observe(document.getElementById('bayzat-app_2'));

    document.getElementById('casestudy_1').addEventListener("click", function() {
        window.location.href = "http://hannaoberg.com/project/bondumi/";
    });
    document.getElementById('casestudy_2').addEventListener("click", function() {
        window.location.href = "http://hannaoberg.com/project/bayzat-saas/";
    });
    document.getElementById('casestudy_3').addEventListener("click", function() {
        window.location.href = "http://hannaoberg.com/project/cykel/";
    });
    document.getElementById('casestudy_4').addEventListener("click", function() {
        window.location.href = "http://hannaoberg.com/project/bayzat-app/";
    });
}