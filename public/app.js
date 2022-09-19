// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon")

//theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

//Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        return;
    }
    sunIcon.classList.add("hidden");
};

//Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

//call theme switch on clicking button
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});

// invoke theme check on initial load
themeCheck();


  