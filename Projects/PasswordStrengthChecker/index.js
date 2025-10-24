/*
  # Rules:
    1. Atleast 8 characters
    2. Atleast one lowercase character
    3. Atlease one uppercase character
    4. Atleast one number
    5. Atleast one special character ($, @, #)
    6. No easy passwords

    - Additional rules:
      - Should not contain name (Explained)
      - Should not contain email (Explained)

  # Category:
    - Strong
    - Moderate
    - Weak
*/

function validatePassword(pwd) {
  // Check: Password is empty or null
  if(!pwd) {
    document.getElementById('invalid-pwd-alert').style.display = 'block'
    return
  }


  let score = 0

  // Check: 1. Atleast 8 characters
  if(pwd.length >= 8) {
    document.getElementById('length-check').innerText = '✅'
    document.getElementById('length-check-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('length-check').innerText = '⚠️'
    document.getElementById('length-check-container').classList.add('list-group-item-danger')
  }

  let hasLowercaseChar = false
  let hasUppercaseChar = false
  let hasNumber = false
  let hasSpecialChar = false
  // a. Iterate through each character of the password string
  for(let i = 0; i < pwd.length; i++) {
    let char = pwd[i]
    if(char >= 'a' && char <= 'z') {
      hasLowercaseChar = true
    }
    if(char >= 'A' && char <= 'Z') {
      hasUppercaseChar = true
    }
    if(char > '0' && char <= '9') {
      hasNumber = true
    }
    if(char == '$' || char == '@' || char == '#') {
      hasSpecialChar = true
    }
  }

  // Check: 2. Atleast one lowercase character
  if(hasLowercaseChar) {
    document.getElementById('lowercase-check').innerText = '✅'
    document.getElementById('lowercase-check-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('lowercase-check').innerText = '⚠️'
    document.getElementById('lowercase-check-container').classList.add('list-group-item-danger')
  }

  // Check: 3. Atleast one uppercase character
  if(hasUppercaseChar) {
    document.getElementById('uppercase-check').innerText = '✅'
    document.getElementById('uppercase-check-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('uppercase-check').innerText = '⚠️'
    document.getElementById('uppercase-check-container').classList.add('list-group-item-danger')
  }

  // Check: 4. Atleast one number
  if(hasNumber) {
    document.getElementById('number-check').innerText = '✅'
    document.getElementById('number-check-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('number-check').innerText = '⚠️'
    document.getElementById('number-check-container').classList.add('list-group-item-danger')
  }

  // Check: 5. Atleast one special character ($, @, #)
  if(hasSpecialChar) {
    document.getElementById('special-char-check').innerText = '✅'
    document.getElementById('special-char-check-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('special-char-check').innerText = '⚠️'
    document.getElementById('special-char-check-container').classList.add('list-group-item-danger')
  }

  const easyPwds = ['user123', 'admin123', 'password123', 'test123', '12345', 'qwerty123']
  // Check: 6. No easy passwords allowed
  if(!easyPwds.includes(pwd)) {
    document.getElementById('no-easy-pwd-check').innerText = '✅'
    document.getElementById('no-easy-pwd-container').classList.add('list-group-item-success')
    score++
  } else {
    document.getElementById('no-easy-pwd-check').innerText = '⚠️'
    document.getElementById('no-easy-pwd-container').classList.add('list-group-item-danger')
  }

  if(score >= 6) {
    document.getElementById('strong-pwd').style.display = 'block'
  } else if (score >= 4) {
    document.getElementById('moderate-pwd').style.display = 'block'
  } else {
    document.getElementById('weak-pwd').style.display = 'block'
  }
}

const inputPassword = prompt("Enter your password")
console.log(inputPassword)

validatePassword(inputPassword)


/*
  # Additional resources:
    - https://www.w3schools.com/charsets/ref_html_ascii.asps


  # Additional code:
    Check: 5. Atleast one number
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // a. Iterate through each character of the password string
    let containsDigit = false
    for(let i = 0; i < pwd.length; i++) {
      // b. Check whether the character is = any of the characters in digits
      if(digits.includes(pwd[i])) {
        console.log("Atleast one number ✅")
        containsDigit = true
        break
      }
    }
    if(!containsDigit) {
      console.log("Atleast one number ⚠️")
    }
*/