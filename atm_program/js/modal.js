let modalState = false;
let modalType = "";
// Ensure  dom is loaded
window.addEventListener('load',function () {
  if (modalState) {
    document.getElementById("modal").style.display = "block";
  }
  if (!modalState) {
    document.getElementById("modal").style.display = "none";
  }

  var modal = document.getElementById("modal");
  const depositBtn = document.getElementById("deposit-button");
  const withdrawBtn = document.getElementById("withdraw-button");
  const withdrawForm = document.getElementById("withdraw-form");
  const depositForm = document.getElementById("deposit-form");
  var span = document.getElementsByClassName("close")[0];

//   Make deposit modal form visible
  depositBtn.onclick = function () {
    // alert("deposit");
    modalType = "deposit";
    modalState = true;
    modal.style.display = "block";
    depositForm.style.display = "block";
    withdrawForm.style.display = "none";
  };
//   Make withdraw modal form visible
  withdrawBtn.onclick = function () {
    // alert("Withdraw");
    modalType = "withdraw";
    modalState = true;
    modal.style.display = "block";
    withdrawForm.style.display = "block";
    depositForm.style.display = "none";
  };
//   Close modal form
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
//   Close modal form when user presses esc key
  this.window.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
      modal.style.display = "none";
    }
  }
    );
    // Handle withdraw form submission
    withdrawForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // alert("Withdraw");
        const formData = new FormData(this);
        const amount = formData.get('amount');

        if (amount > 0) {
            updateBalance(Number(amount), "withdraw");
            modal.style.display = "none";
            window.location.reload();
        } else {
            alert("Please enter a valid amount");
        }
        }
    );
    // Handle deposit form submission
    depositForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const amount = formData.get('amount');
        if (amount > 0) {
            updateBalance(Number(amount), "deposit");
            modal.style.display = "none";
            window.location.reload();
        } else {
            alert("Please enter a valid amount");
        }
        }
    );
})();
