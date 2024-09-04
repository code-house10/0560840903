(function() {
    "use strict"
    var NavBtnOpen = document.querySelector(".menu-toggle"),
        NavBtnClose = document.querySelector(".close-menu"),
        SrchBtnOpen = document.querySelector(".search-toggle"),
        searchWrap = document.getElementById("search"),
        toggleDropdown = document.querySelectorAll(".dropdown-toggle"),
        SideNavBar = document.querySelector(".nav-bar");


    NavBtnOpen.addEventListener(
        "click",
        function() {
            SideNavBar.classList.add("open");
            NavBtnClose.classList.toggle("toggled-on");
        },
    );

    NavBtnClose.addEventListener(
        "click",
        function() {
            SideNavBar.classList.remove("open");
            NavBtnClose.classList.toggle("toggled-on");
        },
    );

    SrchBtnOpen.addEventListener(
        "click",
        function() {
            searchWrap.classList.toggle("open");
            this.classList.toggle("open");
            //  NavBtnClose.classList.toggle("toggled-on");
            // document.getElementById("searchInput").focus();

        },
    );

    toggleDropdown.forEach(function(cbox) {
        cbox.addEventListener(
            "click",
            function() {
                cbox.nextElementSibling.classList.toggle("toggled-on");
                cbox.classList.toggle("toggled-on");
            }, !1
        );
    });

    function stickyHeader() {
        var y = document.body.scrollTop || document.documentElement.scrollTop,
            b = document.getElementById("header");
        if (y > 100) {
            b.classList.add("fixed");
        } else {
            b.classList.remove("fixed");
        }
    }
    document.addEventListener("scroll", stickyHeader);


    function toTop() {
        var y = document.body.scrollTop || document.documentElement.scrollTop,
            b = document.getElementById("totop");
        if (y > 600) {
            b.classList.add("toggled-on")
        } else {
            b.classList.remove("toggled-on")
        }
    }
    document.addEventListener("scroll", toTop);

})();