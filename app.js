// addEventListener('submit') - todo list
// e.preventDefault() - todo list
// input.value - todo list

// addEventListener('change') - todo list
// classList - todo list
// innerHTML - todo list

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const checkbox = document.querySelector(".checkbox");
const btn = document.querySelector("button");
const content = document.querySelector('.content');

form.addEventListener("submit", function (e) {
  // form dagi submit tugmasi bosilgandagi holat uchun
  console.log("Submit!!!");
  e.preventDefault(); // qayta yuklanish hodisasini o'chirib qo'yadi
  // input.value - input ichidagi qiymatni olish
  alert(input.value);
});

checkbox.addEventListener("change", () => {
  console.log("checked!");
});

btn.addEventListener("click", () => {
  // classlist.add - yangi class qo'shadi
  // classlist.remove - mavjud classni o'chiradi
  // contains - classList ichida ma'lum bir class ning bor yoki yo'qligini tekshiradi
  // toggle - classList ichida ma'lum bir class bor bo'lsa o'chiradi yo'q bo'lsa qo'shadi

  if (btn.classList.contains('active')) {
    btn.classList.remove('active')
  } else {
    btn.classList.add('active')
  }

  btn.classList.toggle('active')

});


content.innerHTML = `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, excepturi.</p>
      <span>Lorem ipsum dolor sit amet.</span>
      <img src='' alt='' />
      <button>Start</button>
`