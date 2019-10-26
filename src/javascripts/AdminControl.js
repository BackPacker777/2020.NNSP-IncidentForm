export default class AdminControl {
    constructor() {
        this.handleAdminButton();
        this.handleFormReturnButton();
    }

    handleAdminButton() {
        document.getElementById("adminButton").addEventListener("click", () => {
            if (this.handlePassword()) {
                document.getElementById("mainPage").style.display = 'none';
                document.getElementById("topMast").style.display = 'none';
                document.getElementById('admin').style.display = 'block';
                document.getElementById('adminMast').style.display = 'block';
            } else {
                alert(`Incorrect password. Please try again.`);
            }
        });
    }

    handleFormReturnButton() {
        document.getElementById("formReturn").addEventListener("click", () => {
            document.getElementById("mainPage").style.display = 'block';
            document.getElementById("topMast").style.display = 'block';
            document.getElementById('admin').style.display = 'none';
            document.getElementById('adminMast').style.display = 'none';
        });
    }

    handlePassword() {
        return true;
    }

}