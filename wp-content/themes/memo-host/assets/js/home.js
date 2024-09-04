(function() {
    var elbody = document.body;

    function openModal() {
        var modalTrigger = document.getElementsByClassName("ModalTrigger");
        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
                var target = this.getAttribute("href").substr(1);
                var modalWindow = document.getElementById(target);
                elbody.classList ? elbody.classList.add("overhidden") : (elbody.className += " " + "overhidden");
                modalWindow.classList ? modalWindow.classList.add("open") : (modalWindow.className += " " + "open");
            };
        }
    }

    function closeModal() {
        var closeButton = document.getElementsByClassName("ModalClose");
        var closeOverlay = document.getElementsByClassName("jsOverlay");
        for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function() {
                var modalWindow = this.parentNode.parentNode.parentNode;
                elbody.classList ? elbody.classList.remove("overhidden") : (elbody.className = elbody.className.replace(new RegExp("(^|\\b)" + "overhidden".split(" ").join("|") + "(\\b|$)", "gi"), " "));
                modalWindow.classList ? modalWindow.classList.remove("open") : (modalWindow.className = modalWindow.className.replace(new RegExp("(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)", "gi"), " "));
            };
        }
        for (var i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function() {
                var modalWindow = this.parentNode;
                elbody.classList ? elbody.classList.remove("overhidden") : (elbody.className = elbody.className.replace(new RegExp("(^|\\b)" + "overhidden".split(" ").join("|") + "(\\b|$)", "gi"), " "));
                modalWindow.classList ? modalWindow.classList.remove("open") : (modalWindow.className = modalWindow.className.replace(new RegExp("(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)", "gi"), " "));
            };
        }
    }

    function ready(fn) {
        if (document.readyState != "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }
    ready(openModal);
    ready(closeModal);


})();