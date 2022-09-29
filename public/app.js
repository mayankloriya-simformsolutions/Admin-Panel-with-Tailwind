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

function dropdownFunction(element) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
    list.classList.add("target");
    for (i = 0; i < dropdowns.length; i++) {
        if (!dropdowns[i].classList.contains("target")) {
            dropdowns[i].classList.add("hidden");
        }
    }
    list.classList.toggle("hidden");
}
// Tab component
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("border-b-2", "border-blue-600", "-mb-px", "bg-white");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("border-b-2", "border-blue-600", "-mb-px", "bg-white");
  });
});

// menu dropdown
indow.Components = {
    customSelect(options) {
      return {
        init() {
          this.$refs.listbox.focus()
          this.optionCount = this.$refs.listbox.children.length
          this.$watch('selected', value => {
            if (!this.open) return
  
            if (this.selected === null) {
              this.activeDescendant = ''
              return
            }
  
            this.activeDescendant = this.$refs.listbox.children[this.selected - 1].id
          })
        },
        activeDescendant: null,
        optionCount: null,
        open: false,
        selected: null,
        value: 1,
        choose(option) {
          this.value = option
          this.open = false
        },
        onButtonClick() {
          if (this.open) return
          this.selected = this.value
          this.open = true
          this.$nextTick(() => {
            this.$refs.listbox.focus()
            this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
          })
        },
        onOptionSelect() {
          if (this.selected !== null) {
            this.value = this.selected
          }
          this.open = false
          this.$refs.button.focus()
        },
        onEscape() {
          this.open = false
          this.$refs.button.focus()
        },
        onArrowUp() {
          this.selected = this.selected - 1 < 1 ? this.optionCount : this.selected - 1
          this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
        },
        onArrowDown() {
          this.selected = this.selected + 1 > this.optionCount ? 1 : this.selected + 1
          this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
        },
        ...options,
      }
    },
  }
  
