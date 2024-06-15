onload = function() {
  const inpts = document.querySelectorAll(".inter-card__input");
  const confirm = document.querySelectorAll(".inter-card__confirm");
  const success = document.querySelector(".inter-card__confirmation");
  const form = document.querySelector(".inter-card__form");
  const cardInfo = document.querySelectorAll(".inter-card__credit-grp");
  const errorText = document.querySelectorAll(".inter-card__blank");
  const name = document.querySelector(".inter-card__credit-name");
  const month = document.querySelector(".inter-card__card-month");
  const year = document.querySelector(".inter-card__card-year")
  const security = document.querySelector(".inter-card__security");
  const errorArea = [...errorText];
  const inptsArr = [...inpts];
  const errorArr = [`Can't be blank`, `Numbers only`, `Please enter a valid name`, `Wrong format`, `Wrong format, numbers only`, `Enter valid year`, `Incorrect amount of numbers`, 'Invalid year', 'Invalid month'];

  //hide form and display success message after submit
  const displayConfirmation = (a, b) => {
    a.style.display = 'none';
    b.style.display = 'flex';
  }

  //show error messages
  function addError(n) {
    errorText[n].classList.add("inter-card__show-err");
  }

  //remove error messages
  function remError(n) {
    errorText[n].classList.remove("inter-card__show-err");
  }

  //display error text
  function errorMessage(n, m) {
    errorText[n].innerHTML = errorArr[m];
  }

  //prevent page from refreshing on form submit
  function stopRefresh() {
    confirm[1].addEventListener("click", function(e) {
      e.preventDefault();
    })
  }


  //show on submit error messages for incorrect or missing input
 const showErrors = () => {
    const nameReg = /^[a-zA-Z '.-]{3,}$/;
    const regMonth = /^(0[1-9]|1[0-2])$/;
    const regYear = /^(2[0-9])$/;
    const currentYear = new Date().getFullYear();
    const parsedYear = parseInt(currentYear);


    for (let i = 0; i < inpts.length; i++) {
      if (inpts[i].value.length < 1) {
        errorText[i].classList.add("inter-card__show-err");
        inpts[i].classList.add("inter-card__red-border");
        errorText[i].innerHTML = errorArr[0];
      } else if (inpts[i].value.length > 0) {
        errorText[i].classList.remove("inter-card__show-err");
        inpts[i].classList.remove("inter-card__red-border");
      }
    }
    if (!nameReg.test(inpts[0].value) && inpts[0].value.length > 0) {
      addError(0);
      errorMessage(0, 2);
      inpts[0].classList.add("inter-card__red-border");
    } else if (nameReg.test(inpts[0].value) && inpts[0].value.length > 2) {
      remError(0);
      inpts[0].classList.remove("inter-card__red-border");
    }
    if (inpts[1].value.length < 19 && inpts[1].value.length > 0) {
      errorText[1].classList.add("inter-card__show-err");
      errorText[1].innerHTML = errorArr[6];
      inpts[1].classList.add("inter-card__red-border");
    } else if (inpts[1].value.length > 18) {
      errorText[1].classList.remove("inter-card__show-err");
      inpts[1].classList.remove("inter-card__red-border");
    }
    if (isNaN(inpts[2].value) && inpts[2].value.length > 0) {
      errorText[2].classList.add("inter-card__show-err");
      errorText[2].innerHTML = errorArr[1];
      inpts[2].classList.add("inter-card__red-border");
    } else if (!isNaN(inpts[2].value) && inpts[2].value.length > 0) {
      errorText[2].classList.remove("inter-card__show-err");
      inpts[2].classList.remove("inter-card__red-border");
    }
    if (!regMonth.test(inpts[2].value) && inpts[2].value.length > 0) {
      errorText[2].classList.add("inter-card__show-err");
      errorText[2].innerHTML = errorArr[8];
      inpts[2].classList.add("inter-card__red-border");
    } else if (regMonth.test(inpts[2].value)) {
      errorText[2].classList.remove("inter-card__show-err");
      inpts[2].classList.remove("inter-card__red-border");
    }
   if (isNaN(inpts[3].value) && inpts[3].value.length > 0) {
      errorText[3].classList.add("inter-card__show-err");
      errorText[3].innerHTML = errorArr[1];
      inpts[3].classList.add("inter-card__red-border");
    } else if (!isNaN(inpts[3].value) && inpts[3].value.length > 0) {
      errorText[3].classList.remove("inter-card__show-err");
      inpts[3].classList.remove("inter-card__red-border");
    }
    if (`20${inpts[3].value}` < parsedYear && inpts[3].value > 0 || `20${inpts[3].value}` > (parsedYear + 6)) {
      errorText[3].classList.add("inter-card__show-err");
      errorText[3].innerHTML = errorArr[7];
      inpts[3].classList.add("inter-card__red-border");
    } else if (regYear.test(inpts[3].value)) {
      errorText[3].classList.remove("inter-card__show-err");
      inpts[3].classList.remove("inter-card__red-border");
    }
    if (isNaN(inpts[4].value) && inpts[4].value.length > 0) {
      errorText[4].classList.add("inter-card__show-err");
      errorText[4].innerHTML = errorArr[1];
      inpts[4].classList.add("inter-card__red-border");
    } else if (!isNaN(inpts[4].value) && inpts[4].value.length > 0) {
      errorText[4].classList.remove("inter-card__show-err");
      inpts[4].classList.remove("inter-card__red-border");
    }
    if (inpts[4].value.length < 3 && inpts[4].value.length > 0) {
      errorText[4].classList.add("inter-card__show-err");
      errorText[4].innerHTML = errorArr[3];
      inpts[4].classList.add("inter-card__red-border");
    } else if (inpts[4].value.length > 2 && !isNaN(inpts[4].value)) {
      errorText[4].classList.remove("inter-card__show-err");
      inpts[4].classList.remove("inter-card__red-border");
    }

  }

  //prevent further input if non numbers are typed in credit card field 
  function stopTyping() {
    inpts[1].addEventListener("keydown", function(e) {
      let k = e.key;
      if (k != 'Backspace' && errorText[1].classList.contains("inter-card__show-err")) {
        e.preventDefault();
      }
    })
  }

  //show error message if non numbers are typed in credi card field 
  function numbersOnly() {
    const strings = (a, b) => {
      return inpts[1].value.substring(a, b);
    }
    for (let i = 0; i < inptsArr.length; i++) {
      if (isNaN(strings(0,4)) || isNaN(strings(5,9)) || isNaN(strings(10,14)) || isNaN(strings(15,19))) {
          errorText[1].classList.add("inter-card__show-err");
          errorText[1].innerHTML = errorArr[4];
          stopTyping();
      } else if (!isNaN(strings(0,4)) || !isNaN(strings(5,9)) || !isNaN(strings(10,14)) || !isNaN(strings(15,19))) {
          errorText[1].classList.remove("inter-card__show-err");
      }  
    }

  }

  //add a space between every four credit card numbers
  function addSpace() {
    inpts[1].addEventListener("input", function(e) {
      e.target.value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (mainInpt.value.length > 19) {
        mainInpt.value = mainInpt.value.substring(0, 19);
      }
    })
  }

  //input events
  inpts[0].addEventListener("input", function() {
    name.innerHTML = inpts[0].value;
  })

  inpts[1].addEventListener("input", function() {
    if (inpts[1].value.length > 19) {
      inpts[1].value = inpts[1].value.substr(0, 19);
    }
    cardInfo[0].innerHTML = inpts[1].value.substring(0, 4);
    cardInfo[1].innerHTML = inpts[1].value.substring(5, 9);
    cardInfo[2].innerHTML = inpts[1].value.substring(10, 14);
    cardInfo[3].innerHTML = inpts[1].value.substring(15, 19);

    numbersOnly();
  })

  inpts[2].addEventListener("input", function() {
    if (inpts[2].value.length > 2) {
      inpts[2].value = inpts[2].value.substr(0, 2);
    }
    month.innerHTML = inpts[2].value;
  })

  inpts[3].addEventListener("input", function() {
    if (inpts[3].value.length > 2) {
      inpts[3].value = inpts[3].value.substr(0, 2);
    }
    year.innerHTML = inpts[3].value;
  })

  inpts[4].addEventListener("input", function() {
    if (inpts[4].value.length > 3) {
      inpts[4].value = inpts[4].value.substr(0, 3);
    }
    security.innerHTML = inpts[4].value;
  })

  //submit form if no errors are present
  const submitForm = () => {
    if (errorArea.every(e => {return e.classList.contains("inter-card__show-err") === false}) && inptsArr.every(e => {return e.value.length > 1})) {
      stopRefresh();
      displayConfirmation(form, success);
    }
  }


  addSpace();


  confirm[1].addEventListener("click", function(e) {
    e.preventDefault();
    showErrors();
    submitForm();
  })

  confirm[0].addEventListener("click", function() {
    form.submit();
  })

































}
